
## Implementation Details

* **HTML Structure:** Uses the basic `<input type="range">` element for sliders and the `<canvas>` tag as a container for rendering the chart.
* **Library Integration:** `Chart.js` is included via a single `<script src="...">` tag, demonstrating the approach of using external scripts via CDN.
* **DOM Interaction:** `getElementById` is used to get references to inputs, text nodes for displaying values, and the canvas context (`canvas.getContext('2d')`).
* **Chart Initialization:** A `new Chart()` instance is created, specifying the `line` type, an array of labels for the X-axis (speeds), and basic visualization parameters.
* **Event Handling:** The `addEventListener('input', updateChart)` method binds the recalculation function to the sliders. Using the `input` event ensures data updates with every pixel of slider movement, unlike the `change` event, which triggers only after releasing the mouse button.
* **Dynamic Recalculation:** The `updateChart` function reads current values from the inputs, calculates a new array of distances using the `map` method, mutates the `data` array inside the `burnChart` object, and calls the `burnChart.update()` method for an instant UI
