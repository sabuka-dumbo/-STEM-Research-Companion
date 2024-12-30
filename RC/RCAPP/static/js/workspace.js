const navbar = document.getElementById("navbar");
const burgermenu = document.getElementById("burgermenu");
const span1 = document.getElementById("span1");
const span2 = document.getElementById("span2");
const span3 = document.getElementById("span3");
const navbar2 = document.getElementById("navbar-main-part");

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
    notify_text.value = text;

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
    alert("Please enter a name for the mind map.");
    return;
  }
  const savedData = diagram.model.toJson();
  localStorage.setItem(nameInput, savedData);
  alert(`Mind map "${nameInput}" saved!`);
}

function loadNote(noteId) {
  const savedData = localStorage.getItem(noteId);
  if (savedData) {
    diagram.model = go.Model.fromJson(savedData);
    alert(`Mind map "${noteId}" loaded!`);
  } else {
    alert(`No mind map found with the name "${noteId}".`);
  }
}

function deleteNode() {
  const selectedPart = diagram.selection.first();
  if (selectedPart) {
    diagram.startTransaction("deleteNode");
    diagram.remove(selectedPart);
    diagram.commitTransaction("deleteNode");
    alert("Deleted selected item.");
  } else {
    alert("No node or link selected.");
  }
}

function listAllMindMaps() {
  console.log("Saved Mind Maps:");
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    console.log(key);
  }
}

function addNode() {
  const selectedNode = diagram.selection.first();
  if (!selectedNode) {
    alert("Please select a node to add a child.");
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

listAllMindMaps()