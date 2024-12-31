const navbar = document.getElementById("navbar");
const burgermenu = document.getElementById("burgermenu");
const span1 = document.getElementById("span1");
const span2 = document.getElementById("span2");
const span3 = document.getElementById("span3");
const navbar2 = document.getElementById("navbar-main-part");

const mm_div = document.getElementById("mm-div");
const mm_link1 = document.getElementById("mm-link1")
const mm_link2 = document.getElementById("mm-link2");
const navbar_navs_mm = document.getElementById("navbar-navs-mm");

function open_mm() {
  close_all_divs();

  navbar_navs_mm.innerHTML = `
   <h1 class="navbar-line" id="mm-link2">|</h1>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-diagram-3-fill navbar-icon" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5zm-6 8A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5zm6 0A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5zm6 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5z"/>
    </svg>
    <h1 class="navbar-nav normal-font">Mind maps</h1>
  `;

  mm_div.style.display = "block";
  mm_link1.style.color = "#DA8359";
  mm_link2.style.color = "#DA8359";
}

const charts_div = document.getElementById("charts-div");
const charts_link1 = document.getElementById("charts-link1")
const charts_link2 = document.getElementById("charts-link2");
const navbar_navs_charts = document.getElementById("navbar-navs-charts");

function open_charts() {
close_all_divs();

  navbar_navs_charts.innerHTML = `
   <h1 class="navbar-line" id="charts-link2">|</h1>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pie-chart-fill navbar-icon" viewBox="0 0 16 16">
      <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778zM8.5.015V7.5h7.485A8 8 0 0 0 8.5.015"/>
    </svg>
    <h1 class="navbar-nav normal-font">Charts</h1>
  `;

  charts_div.style.display = "block";
  charts_link1.style.color = "#DA8359";
  charts_link2.style.color = "#DA8359";
}

function close_all_divs() {
  navbar_navs_mm.innerHTML = `
  <h1 class="navbar-line" id="mm-link2">|</h1>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-diagram-3 navbar-icon" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
  </svg>
  <h1 class="navbar-nav normal-font">Mind maps</h1>
 `;

 mm_div.style.display = "none";
 mm_link1.style.color = '';
 mm_link2.style.color = '';

  navbar_navs_charts.innerHTML = `
    <h1 class="navbar-line" id="charts-link2">|</h1>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pie-chart navbar-icon" viewBox="0 0 16 16">
        <path d="M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793zm1 0V7.5h6.482A7 7 0 0 0 8.5 1.018M14.982 8.5H8.207l-4.79 4.79A7 7 0 0 0 14.982 8.5M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"/>
    </svg>
    <h1 class="navbar-nav normal-font">Charts</h1>
  `;

  charts_div.style.display = "none";
  charts_link1.style.color = '';
  charts_link2.style.color = '';
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

    notify_div.addEventListener("animationend", function() {
        notify_div.style.animation = '';

        setInterval(() => {
            notify_div.style.animation = "notify_div_animation_close 1s ease";

            notify_div.addEventListener("animationend", function() {
                notify_div.style.animation = '';
                notify_div.style.display = '';
            })
        }, 3500);
    })
}

notify_icon.addEventListener("click", function() {
    notify_div.style.animation = '';
    notify_div.style.animation = "notify_div_animation_close ease 1s";

    notify_div.addEventListener("animationend", function() {
        notify_div.style.animation = '';
        notify_div.style.display = '';
    })
})

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
