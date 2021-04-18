function TabVM(number) {
    this.number = number;

    /**
     * @return {NodeList[]}
     */
    this.getTabVm = function () {
        let tabLinkNodeList = htmlToElements(htmlTabLink(this.number));
        let tabContentNodeList = htmlToElements(htmlTabContent(this.number));
        return [tabLinkNodeList, tabContentNodeList];
    };

    function htmlTabLink(number) {
        return `<button class="tabLinks-vm" onclick="openTab(event, 'VM${number}','vm')">VM${number}</button>`;
    }

    function htmlTabContent(number) {
        return `<div id="VM${number}" class="tabContent-vm ">
    <label><b>Virtual Machine</b></label>
    <input type="text" placeholder="Enter Virtual Machine ID" name="uname" required>
    <input type="text" placeholder="Enter Vagrant Box Name" name="uname" required>
    <input type="password" placeholder="Enter Password" name="uname" required>

    <label><b>Network</b></label>
    <button>Add</button>
    <div id="network-container${number}" class="network-container">
        <div id="tab-network" class="tab-network">
           <button class="tablinks-network">network1</button>
        </div>

        <!-- newtwork Tab content -->
        <div id="network1" class="tabcontent-network ">
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
    
    <div><label><b>Docker Provisioner</b></label>
        <input type="text" placeholder="Enter Docker Image Name" name="uname" required>
        <input type="text" placeholder="Enter Container Name" name="uname" required>
        <input type="text" placeholder="Enter Docker Command" name="uname" required>
        <input type="text" placeholder="Enter Docker Args" name="uname" required>
    </div>
    <label><b>Script Provisioner</b></label>
    <textarea rows="8" style="resize: none">#!/bin/bash

# some command
        </textarea>
    <label><b>Ansible Provisioner</b></label>
    <textarea rows="8"></textarea></div>`;
    }

}


