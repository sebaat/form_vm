function TabNetwork(number) {
    this.number = number;

    /**
     * @return {NodeList[]}
     */
    this.getTabNetwork = function () {
        return [htmlToElements(htmlTabLinkNetwork()), htmlToElements(htmlTabContentNetwork())];
    };
// todo change tablinks to tabLinks.
    function htmlTabLinkNetwork() {
        return `<button onclick="openTab(event, 'network${this.number}','network')" class="tablinks-network">network${this.number}</button>`;
    }

    function htmlTabContentNetwork() {
        return `<div id="network${this.number}" class="tabcontent-network ">
                <select>
                    <option>public network</option>
                    <option>privet network</option>
                </select>
                <select>
                    <option>dhcp</option>
                    <option>static</option>
                </select>
                <input type="text" placeholder="Enter the ip Address" name="uname" required>
        </div>`;
    }

}


