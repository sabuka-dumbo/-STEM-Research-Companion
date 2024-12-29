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


/* ss */

function init() {
    const $ = go.GraphObject.make;
    const myDiagram = $(go.Diagram, "myDiagramDiv", {
      "undoManager.isEnabled": true, // Enable undo/redo
    });

    // Define a node template
    myDiagram.nodeTemplate = $(
      go.Node,
      "Auto",
      $(go.Shape, "RoundedRectangle", { fill: "lightblue" }),
      $(go.TextBlock, { margin: 8 }, new go.Binding("text", "key"))
    );

    // Define a link template
    myDiagram.linkTemplate = $(
      go.Link,
      $(go.Shape), // Line
      $(go.Shape, { toArrow: "OpenTriangle" }) // Arrowhead
    );

    // Initialize diagram model with example data
    myDiagram.model = new go.GraphLinksModel(
      [{ key: "Main Idea" }, { key: "Sub Idea 1" }, { key: "Sub Idea 2" }],
      [
        { from: "Main Idea", to: "Sub Idea 1" },
        { from: "Main Idea", to: "Sub Idea 2" },
      ]
    );
  }

  function addNode() {
    const nodeData = { key: "New Idea" };
    myDiagram.model.addNodeData(nodeData);
  }

  const canvas = document.getElementById("mindmapCanvas");

  // Example: Create a new node
  function createNode(x, y, text) {
    const node = document.createElement("div");
    node.style.position = "absolute";
    node.style.left = x + "px";
    node.style.top = y + "px";
    node.style.width = "100px";
    node.style.height = "50px";
    node.style.border = "1px solid black";
    node.style.backgroundColor = "lightblue";
    node.style.textAlign = "center";
    node.style.lineHeight = "50px";
    node.innerText = text;

    canvas.appendChild(node);

    // Make node draggable
    node.addEventListener("mousedown", (event) => {
      const offsetX = event.offsetX;
      const offsetY = event.offsetY;

      const moveNode = (moveEvent) => {
        node.style.left = moveEvent.pageX - offsetX + "px";
        node.style.top = moveEvent.pageY - offsetY + "px";
      };

      const stopMoving = () => {
        document.removeEventListener("mousemove", moveNode);
        document.removeEventListener("mouseup", stopMoving);
      };

      document.addEventListener("mousemove", moveNode);
      document.addEventListener("mouseup", stopMoving);
    });
  }

  createNode(100, 100, "Main Idea");
  createNode(300, 200, "Sub Idea");