function gid(s) {
    var el = document.getElementById(s);
    if (el == null) throw new Error('gid: there is no element with the id ' + s);
    return el;
}

function div() {
    return document.createElement('div');
}

function createbox(x, y, w, h, txt, classname, id) {
    var box = div();
    if (txt) box.innerHTML = txt;
    if (id) box.id = id;
    if (classname) box.classList.add(classname);
    box.style.width = w+"px";
    box.style.height = h+"px";
    box.style.position = "fixed";
    box.style.top = y+"px";
    box.style.left = x+"px"
    box.classList.add("box");
    box.style.zIndex = "1";
    box.x = x + (w/2);
    box.y = y + (h/2);
    gid("maincontainer").appendChild(box);
    return box;
}


function line(x1, y1, x2, y2, info) {
    var w = 10;
    var line = div();
    line.classList.add("line");
    line.style.position = "fixed";
    if (x1 == x2) {
        line.style.left = (x1 - (w/2))+'px';
        line.style.top = (y1-(w/2))+'px';
        line.style.height = Math.abs(y2-y1+w)+'px';
        line.style.width = w+'px';
    } else if (y1 == y2) {
        line.style.top = (y1-(w/2))+'px';
        line.style.left = (x1-(w/2))+'px';
        line.style.height = w+'px';
        line.style.width = Math.abs(x2-x1+w)+'px';
        infotab(x1+((x2-x1)/2), y1, info);
    }
    gid("maincontainer").append(line);

}

function infotab(x, y, info) {
    var infobubble = div();
    var w = 35;
    infobubble.classList.add("infotab");
    infobubble.style.position = "fixed";
    infobubble.style.width = w+"px";
    infobubble.style.height = w+"px";
    infobubble.style.left = (x-(w/2))+"px";
    infobubble.style.top = (y-(w/2))+"px";
    infobubble.style.zIndex = "2";

    var i = div();
    var iwidth = 300;
    var iheight = 400;
    i.style.position = "fixed";
    i.style.left = (x-(iwidth/2))+"px";
    i.style.width = iwidth+"px";
    i.style.height = iheight+"px";
    i.innerHTML = info;
    i.style.zIndex = "1";
    i.style.background = "grey";
    i.style.color = "white";
    i.style.display = "none";

    infobubble.addEventListener("click", function(){
        i.style.top = y+"px";
        if (i.style.display == "none") {
            i.style.display = "block";
        } else {
            i.style.display = "none";
        }

    });

    gid("maincontainer").append(infobubble);
    gid("maincontainer").append(i);
}

const headerwidth = 200;
const widthspace = headerwidth + 50;
var borrower = createbox(50, 50, 200, 75, "Borrower", "header");
var broker = createbox(50 + widthspace * 1, 50, 200, 75, "Broker", "header");
var lender = createbox(50 + widthspace * 2, 50, 200, 75, "Lender", "header");
var underwriter = createbox(50 + widthspace * 3, 50, 200, 75, "Underwriter", "header");
var appraiser = createbox(50 + widthspace * 4, 50, 200, 75, "Appraiser", "header");
var investors = createbox(50 + widthspace * 5, 50, 200, 75, "Investors", "header");
var lawyer = createbox(50 + widthspace * 6, 50, 200, 75, "Lawyer", "header");

line(broker.x, broker.y, broker.x, broker.y+300);

line(borrower.x, borrower.y+300, broker.x, borrower.y+300, "HAH");

line(borrower.x, borrower.y, borrower.x, borrower.y+300);
line(lender.x, lender.y, lender.x, lender.y+300);
line(underwriter.x, underwriter.y, underwriter.x, underwriter.y+300);
line(appraiser.x, appraiser.y, appraiser.x, appraiser.y+300);
line(investors.x, investors.y, investors.x, investors.y+300);
line(lawyer.x, lawyer.y, lawyer.x, lawyer.y+300);
