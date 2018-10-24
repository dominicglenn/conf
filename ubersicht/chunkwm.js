command: "echo \"\$(chunkc tiling::query --desktop windows|wc -l)/$(chunkc tiling::query --desktop id)$(chunkc tiling::query --desktop mode|cut -c1-1)\"",

refreshFrequency: 100,

render: function(output) {
  return `<span>${output}</span>`;

},

style: `
  top: 2px;
  right: 4px;
  font-family: "Courier New";
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  font-size: 14px;
`