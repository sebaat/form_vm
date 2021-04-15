document.getElementById("defaultOpen").click();
let tabNumber = 1;

function openCity(evt, cityName, type) {

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent" + "-" + type);
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks" + "-" + type);
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active-" + type, "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active-" + type;
}

function addTab() {
    tabNumber++;
    let parent = document.getElementById("tab-vm");
    let container = document.getElementById("container");
    let tab = document.createElement("button");
    let buttonName = "VM" + tabNumber;
    let textNode = document.createTextNode(buttonName);
    tab.appendChild(textNode);
    tab.className = "tablinks-vm";
    tab.onclick = (event) => {
        openCity(event, buttonName, "vm");

    };

    defaultContent().forEach(value => {
        container.appendChild(value);
    });

    parent.appendChild(tab);
    tab.click();
}

/**
 * @return {NodeList}
 */
function defaultContent() {
    let nodes = htmlToElements(`<div id="VM${tabNumber}" class="tabcontent-vm ">
    <label><b>Virtual Machine</b></label>
    <input type="text" placeholder="Enter Virtual Machine ID" name="uname" required>
    <input type="text" placeholder="Enter Vagrant Box Name" name="uname" required>
    <input type="password" placeholder="Enter Password" name="uname" required>

    <label><b>Network</b></label>
    <button>Add</button>
    <div class="network-container">
        <div id="tab-network" class="tab-network" >
            <button class="tablinks-network" onclick="openCity(event, 'network1','network')">network1</button>
        </div>

        <!-- newtwork Tab content -->
        <div id="network1" class="tabcontent-network ">
            <div>
                <select>
                    <option>public network</option>
                    <option>privet network</option>
                </select>
                <select>
                    <option>dhcp</option>
                    <option>static</option>
                </select>
                <input type="text" placeholder="Enter the ip Address" name="uname" required>
            </div>
        </div>
    </div>

    <label><b>Docker Provisioner</b></label>
    <input type="text" placeholder="Enter Docker Image Name" name="uname" required>
    <input type="text" placeholder="Enter Container Name" name="uname" required>
    <input type="text" placeholder="Enter Docker Command" name="uname" required>
    <input type="text" placeholder="Enter Docker Args" name="uname" required>
    <label><b>Script Provisioner</b></label>
    <textarea rows="8" style="resize: none">#!/bin/bash

# some command
        </textarea>
    <label><b>Ansible Provisioner</b></label>
    <textarea rows="8"></textarea></div>`);

    return nodes
}

/**
 * @param {String} HTML representing any number of sibling elements
 * @return {NodeList}
 */
function htmlToElements(html) {
    let template = document.createElement('template');
    template.innerHTML = html;
    return template.content.childNodes;
}

function createButton() {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent-vm");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].remove()
        i--;
    }
    tablinks = document.getElementsByClassName("tablinks-vm");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].remove();
        i--;
    }
    document.getElementById('id01').style.display = 'block';
    tabNumber = 0;
    addTab();
}
