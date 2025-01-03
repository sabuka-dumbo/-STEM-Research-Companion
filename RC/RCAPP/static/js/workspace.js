const navbar = document.getElementById("navbar");
const burgermenu = document.getElementById("burgermenu");
const span1 = document.getElementById("span1");
const span2 = document.getElementById("span2");
const span3 = document.getElementById("span3");
const navbar2 = document.getElementById("navbar-main-part");

const mm_div = document.getElementById("mm-div");
const mm_link1 = document.getElementById("mm-link1")
const mm_link2 = document.getElementById("mm-link2");

function open_mm() {
  mm_div.style.display = "block";
  mm_link1.style.color = "#DA8359";
  mm_link2.style.color = "#DA8359";
}

const charts_div = document.getElementById("charts-div");
const charts_link1 = document.getElementById("charts-link1");
const charts_link2 = document.getElementById("charts-link2");

function open_charts() {
  charts_div.style.display = "block";
  charts_link1.style.color = "#DA8359";
  charts_link2.style.color = "#DA8359";
}

let current_name = "";
let current_id = 0;

let is_ready = true;

let open = false;

burgermenu.addEventListener("click", function() {

    if (is_ready == true) {
        is_ready = false;

        if (open == false) {
            span1.style.animation = "span1_open ease 1s";
            span2.style.animation = "span2_open ease 1s";
            span3.style.animation = "span3_open ease 1s";
            navbar.style.animation = "navbar_open ease 1s";
            navbar2.style.display = "block";
            navbar2.style.animation = "navbar2_open ease 1s"

            navbar.addEventListener("animationend", function() {
                navbar.style.width = "100%";
            })

            span1.addEventListener("animationend", function() {
                span1.style.animation = '';
                span2.style.animation = '';
                span3.style.animation = '';
                navbar2.style.animation = '';
                span1.style.top = "20px";
                span2.style.opacity = "0";
                span3.style.top = '-20px';
                span1.style.rotate = "45deg";
                span3.style.rotate = "-45deg";
                navbar2.style.display = "block";
                is_ready = true;
                open = true;
            })
        } else {
            span1.style.animation = "span1_close ease 1s";
            span2.style.animation = "span2_close ease 1s";
            span3.style.animation = "span3_close ease 1s";
            navbar.style.animation = "navbar_close ease 1s";
            navbar2.style.display = "block";
            navbar2.style.animation = "navbar2_close ease 1s"

            navbar.addEventListener("animationend", function() {
                navbar.style.width = '';
            })

            span1.addEventListener("animationend", function() {
                span1.style.animation = '';
                span2.style.animation = '';
                span3.style.animation = '';
                navbar2.style.animation = '';
                span1.style.top = "0px";
                span2.style.opacity = "1";
                span3.style.top = '0px';
                span1.style.rotate = "0deg";
                span3.style.rotate = "0deg";
                navbar2.style.display = '';
                is_ready = true;
                open = false;
            })
        }
    }
})




const notify_div = document.getElementById("notify_div");
const notify_text = document.getElementById("notify_text");
const notify_icon = document.getElementById("notify_icon");

function notification(text) {
    notify_text.innerText = text;
    notify_div.style.display = "block";
    notify_div.style.animation = "notify_div_animation_open 1s ease";

    notify_div.addEventListener("animationend", function handleOpenAnimation() {
        notify_div.style.animation = '';

        setTimeout(() => {
            notify_div.style.animation = "notify_div_animation_close 1s ease";

            notify_div.addEventListener("animationend", function handleCloseAnimation() {
                notify_div.style.animation = '';
                notify_div.style.display = 'none';
                notify_div.removeEventListener("animationend", handleCloseAnimation);
            });
        }, 3500);

        notify_div.removeEventListener("animationend", handleOpenAnimation);
    });
}

notify_icon.addEventListener("click", function() {
    notify_div.style.animation = '';
    notify_div.style.animation = "notify_div_animation_close 1s ease";

    notify_div.addEventListener("animationend", function handleCloseAnimation() {
        notify_div.style.animation = '';
        notify_div.style.display = 'none';
        notify_div.removeEventListener("animationend", handleCloseAnimation);
    });
});



let diagram = null;

document.addEventListener("DOMContentLoaded", () => {
  diagram = go.GraphObject.make(go.Diagram, "mindmap", {
    "undoManager.isEnabled": true,
    layout: go.GraphObject.make(go.TreeLayout, { angle: 90, layerSpacing: 40 }),
    initialContentAlignment: go.Spot.Center,
  });

  diagram.nodeTemplate = go.GraphObject.make(
    go.Node,
    "Auto",
    go.GraphObject.make(go.Shape, "RoundedRectangle", { fill: "lightblue", strokeWidth: 0 }),
    go.GraphObject.make(go.TextBlock, { margin: 8, editable: true }, new go.Binding("text").makeTwoWay())
  );

  diagram.linkTemplate = go.GraphObject.make(
    go.Link,
    { routing: go.Link.Orthogonal, corner: 5 },
    go.GraphObject.make(go.Shape, { strokeWidth: 3, stroke: "#555" })
  );

  diagram.model = new go.TreeModel([{ key: "Root", text: "Root", color: "lightblue" }]);
});

function saveMap() {
  const nameInput = document.getElementById("mindmapName").value;

  if (!nameInput) {
    notification("Sorry, there was some problem with mindmap's name.");
    return;
  }

  const savedData = diagram.model.toJson();

  fetch("/save/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: nameInput, data: savedData }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        notification("Sorry, there was some problem:", data.error);
      } else {
        clear_mm();
        mm_unlock();
      
        let data_PK = data.mm_pk;
      
        document.getElementById("mm-loads-id").innerHTML += `
          <div class="mm-saved-list" id="${data_PK}">
            <h1 class="normal-font mm-sl-title">${ nameInput }</h1>
            <div class="mm-sl-buttons">
              <button class="normal-font mm-sl-button-2" onclick="loadNote('${data.name}', '${data_PK}')" style="background-color: gray;" disabled=true id="mm-buttons">Load</button>
              <button class="normal-font mm-sl-button-3" onclick="deleteNode('${data_PK}')" style="background-color: gray;" disabled=true id="mm-buttons">Delete</button>
            </div>
          </div>
        `;
      }
    })
    .catch((error) => {
      notification("Sorry, there was some problem. Failed to save mind map");
    });
}

function mm_lock() {
  const mm_lock_back = document.getElementById("mm-lock");

  mm_lock_back.style.display = "block";
  mm_lock_back.style.animation = "fade_in 1s ease";

  mm_lock_back.addEventListener("animationend", function() {
    mm_lock_back.style.animation = '';
    mm_lock_back.style.display = "block";
    mm_lock_back.style.opacity = "100%";
  })
}

function mm_unlock() {
  const mm_lock_back = document.getElementById("mm-lock");

  mm_lock_back.style.display = "block";
  mm_lock_back.style.animation = "fade_out 1s ease";
  document.getElementById('mindmapName').setAttribute('readonly', false);
  document.getElementById("mindmapName").value = '';
  document.getElementById("mm-name").innerText = "Mindmap: New";

  mm_lock_back.addEventListener("animationend", function() {
    mm_lock_back.style.animation = '';
    mm_lock_back.style.display = "none";
    mm_lock_back.style.opacity = "0%";
  })
}

function loadNote(Name, MPK) {
  fetch(`/load/${Name}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        notification("Sorry, there was some problem:" + data.error);
      } else {
        diagram.model = go.Model.fromJson(data.data);
        document.getElementById("mm-name").innerText = "Mindmap: " + Name;
        mm_lock();
        document.getElementById("mindmapName").value = Name;
        document.getElementById('mindmapName').setAttribute('readonly', true);
        current_id = MPK;
        current_name = Name;
      }
    })
    .catch((error) => {
      console.error("Error loading mind map:", error);
      notification("Sorry, there was some problem. Couldn't load mind map.")
    });
}

function clear_mm() {
  diagram.model = new go.TreeModel([{ key: "Root", color: "lightblue", text: "Root" }]);
}

function cancelNote() {
  clear_mm();
  mm_unlock();
}

function deleteNote() {
  let mindmapName = document.getElementById("mindmapName").value;

  if (mindmapName) {
    console.log(mindmapName);
    fetch(`/delete/${mindmapName}/`)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          notification("Sorry, there was some problem. " + data.error);
        } else {
          diagram.model = new go.TreeModel([]);
          document.getElementById("mindmapName").value = "";
          document.getElementById(current_id).remove();
          mm_unlock();
          clear_mm();
        }
      })
      .catch((error) => {
        notification("Sorry, failed to delete the mind map");
      });
  } else {
    notification("Sorry, no mindmap name provided for deletion.");
  }
}

function deleteNote2(name, id) {
  let mindmapName = name;

  if (mindmapName) {
    console.log(mindmapName);
    fetch(`/delete/${mindmapName}/`)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
        } else {
          diagram.model = new go.TreeModel([]);
          document.getElementById("mindmapName").value = "";
          document.getElementById(id).remove();
          clear_mm();
        }
      })
      .catch((error) => {
        notification("Sorry, failed to delete the mindmap");
      });
  } else {
    notification("Sorry, no mindmap name provided for dletion.")
  }
}

function listAllMindMaps() {
  fetch("/list/")
    .then((response) => response.json())
    .then((data) => {
      if (data.mindmaps && data.mindmaps.length > 0) {
        console.log("Saved Mind Maps:");
        data.mindmaps.forEach((map) => {
          console.log(map.name);
        });
      } else {
        console.log("No saved mind maps found.");
      }
    })
    .catch((error) => {
      console.error("Error listing mind maps:", error);
    });
}



function addNode() {
  const selectedNode = diagram.selection.first();
  if (!selectedNode) {
    notification("Please select a node to add a child.");
    return;
  }

  const newNodeKey = `Node ${diagram.model.nodeDataArray.length + 1}`;
  const newNodeText = `New Node ${diagram.model.nodeDataArray.length + 1}`;

  diagram.startTransaction("addNode");
  diagram.model.addNodeData({
    key: newNodeKey,
    text: newNodeText,
    parent: selectedNode.data.key,
    color: "lightblue",
  });
  diagram.commitTransaction("addNode");
}

let current_type = document.getElementById("cc-select").value;
let current_back_color = document.getElementById("back_color").value;
let current_border_color = document.getElementById("border_color").value;

const ctx = document.getElementById('myChart');
let chart = new Chart(ctx, {
  type: current_type,
  data: {
    labels: ['Red'],
    datasets: [{
      label: '# of Votes',
      data: [12],
      backgroundColor: current_back_color,
      borderWidth: 1,
      borderColor: current_border_color
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

function change_chart() {
  const cc_select = document.getElementById("cc-select").value;

  current_type = cc_select;

  chart_data = [];

  chart.destroy();
  chart = new Chart(ctx, {
    type: cc_select,
    data: {
      labels: ['Red'],
      datasets: [{
        label: '# of Votes',
        data: [12],
        backgroundColor: current_back_color,
        borderColor: current_border_color,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function change_back_color() {
  const cc_back_color = document.getElementById("back_color").value;

  current_back_color = cc_back_color;

  chart.destroy();
  chart = new Chart(ctx, {
    type: current_type,
    data: {
      labels: ['Red'],
      datasets: [{
        label: '# of Votes',
        data: [12],
        backgroundColor: current_back_color,
        borderColor: current_border_color,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function change_border_color() {
  const cc_border_color = document.getElementById("border_color").value;

  current_border_color = cc_border_color;

  chart.destroy();
  chart = new Chart(ctx, {
    type: current_type,
    data: {
      labels: ['Red'],
      datasets: [{
        label: '# of Votes',
        data: [12],
        backgroundColor: current_back_color,
        borderColor: current_border_color,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function reset_chart() {
  current_back_color = "#ffaec0";
  current_border_color = "#e35171";

  chart_data = [];

  document.getElementById("back_color").value = "#ffaec0";
  document.getElementById("border_color").value = "#e35171";

  chart.destroy();
  chart = new Chart(ctx, {
    type: current_type,
    data: {
      labels: ['Red'],
      datasets: [{
        label: '# of Votes',
        data: [12],
        backgroundColor: current_back_color,
        borderColor: current_border_color,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

const chart_data_label = document.getElementById("chart_data_label");
const chart_data_value = document.getElementById("chart_data_value");
let chart_data = [];

function chart_data_save() {
  if (chart_data_label.value !== '') {
    if (chart_data_value.value !== '') {
      chart_data.push({"Label": chart_data_label.value, "Value": chart_data_value.value})
      notification("Data, " + chart_data_label.value + ", added to chart!")
    
      chart_data_label.value = '';
      chart_data_value.value = '';

      document.getElementById("back_color").value = "#ffaec0";
      document.getElementById("border_color").value = "#e35171";

      chart.destroy();
      chart = new Chart(ctx, {
        type: current_type,
        data: {
          labels: chart_data.map(data => data.Label),
          datasets: [{
            label: chart_data.map(data => data.Label),
            data: chart_data.map(data => Number(data.Value)), 
            backgroundColor: current_back_color,
            borderColor: current_border_color,
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
            x: {
              display: false,
            }
          },
        }
      });
    } else {
      notification("Please enter data value.");
    }
  } else {
    notification("Please enter data label.");
  }
}