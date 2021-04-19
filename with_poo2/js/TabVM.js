function TabVM(number) {
    this.number = number;
    this.networkNumber = 1;

    /**
     * @return {NodeList[]}
     */
    this.getTabVm = function () {
        let tabLinkNodeList = htmlToElements(htmlTabLink(this.number));
        let tabContentNodeList = htmlToElements(htmlTabContent(this.number));
        // retrieve the add network button.
        tabContentNodeList[0].getElementsByTagName("button")[0].onclick = ev => {
            this.networkNumber++;
            let networkTab = new TabNetwork(this.number + "-" + this.networkNumber).getTabNetwork();
            let networkTabLink = networkTab[0];
            let networkTabContent = networkTab[1];
            networkTabContent.forEach(value => document.getElementById("network-container" + this.number).appendChild(value));
            networkTabLink.forEach(value => {
                document.getElementById("tab-network" + this.number).appendChild(value)
                value.click()
            });
        };
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
        <div id="tab-network${number}" class="tab-network">
           <button onclick="openTab(event, 'network${number}-1','network${number}')" class="tabLinks-network${number} active">network${number}-1</button>
        </div>
<!--         newtwork Tab content -->
        <div id="network${number}-1" style="display: block;
    padding: 12px 12px;
    border: 1px solid #ccc;
    border-top: none;" class="tabContent-network${number} ">
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


