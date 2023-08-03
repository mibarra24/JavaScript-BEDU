function createTabs(node) {
    const tabs = Array.from(node.children).map(function (node) {
      const button = document.createElement("button")
      button.textContent = node.getAttribute("data-tabname")
  
      const tab = {
        node: node,
        button: button
      }
  
      button.addEventListener("click", function () {
        return selectTab(tab)
      })
  
      return tab;
    })
  
    const tabList = document.createElement("div")
  
    for (const tab of tabs) {
      tabList.appendChild(tab.button)
    }
  
    node.insertBefore(tabList, node.firstChild)
  
    function selectTab(selectedTab) {
      for (const tab of tabs) {
        const selected = tab === selectedTab
        tab.node.style.display = selected ? "" : "none"
        tab.button.style.color = selected ? "red" : ""
      }
    }
  
    selectTab(tabs[0])
  }
  
  createTabs(document.querySelector("#tab-panel"));