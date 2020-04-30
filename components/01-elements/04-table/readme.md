# Default

Tables are one of the tougher elements to handle responsively. By default a table will not scale down well to smaller viewports.

# Linearizable

Tables with few columns are good candidates for being linearized. On small viewports, each record is
displayed as a card of heading/value pairs. This technique does require repeating each column header as a data attribute for each row.

# Horizontal Scroll

For tables with many columns or a lot of data in each column, horizontal scrolling is probably the best option. The tab index is important to allow focus for keyboard users. Once focus is set on the table wrapper, the arrow keys can be used to scroll.

# Numeric

Table cells with `.numeric` class will be right-aligned