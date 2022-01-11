// INCOMPLETE
export default {
    title: 'Components/Table',
    parameters: {
        description: `
A table contains a set of line items and usually comprises rows (with each row showing one line item) and columns. Line items can contain data of any kind, but also interactive elements, for example, for editing the data, navigating, or triggering actions relating to the line item.
To display large amounts of data in tabular form, several table components are provided. These are divided into two groups, each of which is defined by a consistent feature set:

- Fully responsive tables
- Desktop-centric tables


##Usage 
**Use the responsive table if:**

- The table content should be flexible and visually appealing. The responsive table offers the most flexibility in regards to its content because multiple components can be used. In addition, different rows can be based on different item templates.
- The focus lies on working on line items, not on individual cells.
- A main use case involves selecting one or more items, for which details are needed in order to choose the correct item.
- Line items are independent of each other and no operation across columns is needed.
- You want to have only one implementation for all devices.


**Use the grid table if:**

- You need to display more than 1,000 rows at the same time.
- The cell level and the spatial relationship between cells are more important than the line item, such as if users need to recognize patterns in the data, like in waterfall charts.
- Comparing items is a major use case. The grid table layout remains stable irrespective of the screen width. In addition, a cell only ever contains one component.
- You need an analytical table, but you cannot provide an analytical binding.


**Do not use the table if:**

- You want to display a simple hierarchical dataset.
- You want to use a hierarchical master list for a master-detail scenario using the **Flexible Column Layout**.
- Using a tree table would be too complex.
- The main use case involves selecting one of several hierarchical items with only a few details per item.

In these cases, use the **Tree** instead.
        `,
        docs: {
            iframeHeight: 500
        },
        components: [
            'button',
            'form-label',
            'fieldset',
            'icon',
            'link',
            'object-status',
            'table',
            'toolbar',
            'pagination',
            'popover',
            'list',
            'toolbar',
            'bar',
            'dialog',
            'input',
            'input-group',
            'multi-input',
            'checkbox',
            'select',
            'menu',
            'text',
            'object-number',
            'object-marker'
        ]
    }
};

export const primary = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Default Table</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">
                <div class="fd-table__text fd-table__text--no-wrap" style="max-width: 250px">
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                </div>
            </td>
            <td class="fd-table__cell">Middle Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">
                <div class="fd-table__text" style="max-width: 250px">
                    Very long Text Wrapped, limited by max-width
                    Very long Text Wrapped, limited by max-width
                    Very long Text Wrapped, limited by max-width
                    Very long Text Wrapped, limited by max-width
                </div>
            </td>
            <td class="fd-table__cell">Middle Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Middle Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
`;

primary.storyName = 'Primary';
primary.parameters = {
    docs: {
        storyDescription: `
The primary table contains columns with headers, and rows with links. In the first column, links are displayed. To display links within a table, add the \`fd-link\` class within the table data.
    `
    }
};

export const borderless = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table Without Borders</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table fd-table--no-horizontal-borders fd-table--no-vertical-borders">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
`;

borderless.storyName = 'Borderless';
borderless.parameters = {
    docs: {
        storyDescription: `
Table can be displayed without borders that separate the columns, column headers, and rows. To display a borderless table, add the \`fd-table--no-horizontal-borders\` and \`fd-table--no-vertical-borders\` modifier classes to the main element.

**Note:** You can remove borders on individual cells by adding the above-mentioned modifier classes to them only.
        
    `
    }
};

export const borderlessbody = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table Without Borders On Body</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body fd-table__body--no-horizontal-borders fd-table__body--no-vertical-borders">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
`;

borderlessbody.storyName = 'Borderless (body)';
borderlessbody.parameters = {
    docs: {
        storyDescription: `
Table can be displayed without borders that separate the columns and rows only, leaving the column headers with borders. To display a borderless table body, add the  \`fd-table--no-horizontal-borders\` and \`fd-table--no-vertical-borders\` modifier classes to the body element.
    `
    }
};

export const noOuterBorder = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table Without Outer Borders</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table fd-table--no-outer-border">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
`;

noOuterBorder.storyName = 'No outer Border';
noOuterBorder.parameters = {
    docs: {
        storyDescription: `
Table can be displayed without outer borders, might be needed when used inside some other element. To display a table without outer border, add the \`fd-table--no-outer-border\` modifier class to the main element.
    `
    }
};

export const footer = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table With Footer Cozy Mode</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
    <tfoot class="fd-table__footer">
        <tr class="fd-table__row">
            <td class="fd-table__cell"></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell"></td>
        </tr>
    </tfoot>
</table>`;

footer.storyName = 'Footer';
footer.parameters = {
    docs: {
        storyDescription: `
Table can be displayed with a footer. To display a table footer, add the \`fd-table__footer\` class with a \`tfoot\` element. It must contain the same amount and size of columns as the table head and body containers.
    `
    }
};

export const compactFooter = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table With Footer Compact Mode</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table fd-table--compact">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
    <tfoot class="fd-table__footer">
        <tr class="fd-table__row">
            <td class="fd-table__cell"></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell"></td>
        </tr>
    </tfoot>
</table>
`;

compactFooter.storyName = 'Footer (compact)';
compactFooter.parameters = {
    docs: {
        storyDescription: `
Table can be displayed with a footer in compact mode, which is ideal for larger desktop screens. To display a compact table, add the \`fd-table--compact\` modifier class to the main element.
    `
    }
};

export const condensedFooter = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table With Footer Condensed Mode</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table fd-table--condensed">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
    <tfoot class="fd-table__footer">
        <tr class="fd-table__row">
            <td class="fd-table__cell"></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell"></td>
        </tr>
    </tfoot>
</table>
`;

condensedFooter.storyName = 'Footer (condensed)';
condensedFooter.parameters = {
    docs: {
        storyDescription: `
Similar to the previous example, table can be displayed with a footer in condensed mode (for desktop screens). To display a condensed table, add the \`fd-table--condensed\` modifier class to the main element.
    `
    }
};

export const interactive = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Interactive Table With Hoverable and Activable Cells and Rows</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--activable fd-table__cell--hoverable" scope="col">Hovering And</th>
            <th class="fd-table__cell fd-table__cell--activable fd-table__cell--hoverable" scope="col">Clicking</th>
            <th class="fd-table__cell fd-table__cell--activable fd-table__cell--hoverable" scope="col">On Header's Cell</th>
            <th class="fd-table__cell fd-table__cell--activable fd-table__cell--hoverable" scope="col">Will Trigger</th>
            <th class="fd-table__cell fd-table__cell--activable fd-table__cell--hoverable" scope="col">Color Change</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row fd-table__row--activable fd-table__row--hoverable">
            <td class="fd-table__cell">Clicking on any Cell</td>
            <td class="fd-table__cell"><p class="fd-text">On This Row will cause</p></td>
            <td class="fd-table__cell">
                <span class="fd-object-number fd-object-number--negative">
                    <span class="fd-object-number__text">-2,000.00</span><span class="fd-object-number__unit">EUR</span>
                </span>
            </td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--negative">
                    <i class="fd-object-status__icon sap-icon--message-error" role="presentation"></i>
                    <span class="fd-object-status__text">Highlight of Whole Row</span>
                </span>
            </td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--activable">Clicking On Cell</td>
            <td class="fd-table__cell fd-table__cell--activable">
                <a class="fd-object-marker fd-object-marker--link">
                    <i class="fd-object-marker__icon sap-icon--private" role="presentation"></i>
                    <span class="fd-object-marker__text">Will cause</span>
                </a>
            </td>
            <td class="fd-table__cell fd-table__cell--activable">Highlight of cell</td>
            <td class="fd-table__cell fd-table__cell--activable">Last Name</td>
            <td class="fd-table__cell fd-table__cell--activable">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--hoverable">Hovering On Any Cell</td>
            <td class="fd-table__cell fd-table__cell--hoverable">Will Change</td>
            <td class="fd-table__cell fd-table__cell--hoverable">Background</td>
            <td class="fd-table__cell fd-table__cell--hoverable">Of Certain</td>
            <td class="fd-table__cell fd-table__cell--hoverable">Cell</td>
        </tr>
        <tr class="fd-table__row fd-table__row--hoverable">
            <td class="fd-table__cell">Hovering On Any Cell</td>
            <td class="fd-table__cell">And cells</td>
            <td class="fd-table__cell">Will Change</td>
            <td class="fd-table__cell">Background of Whole Row</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
`;

interactive.storyName = 'Interactive';
interactive.parameters = {
    docs: {
        storyDescription: `
The table component can be interactive with hoverable and activable cells and rows. 

Interaction | Modifier class
:------------- | :------------------
Activate | \`--activable\`
Hover | \`--hoverable\`     
    `
    }
};

export const semanticRows = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table with Semantic Rows</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--status-indicator"></th>
            <th class="fd-table__cell fd-table__cell--checkbox" scope="col">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai9ez611">
                <label class="fd-checkbox__label" for="Ai9ez611"></label>
            </th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai9ek611">
                <label class="fd-checkbox__label" for="Ai9ek611"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell"><p class="fd-text">First Name</p></td>
            <td class="fd-table__cell"><p class="fd-text">Last Name</p></td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator fd-table__cell--status-indicator--valid"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai9ek673">
                <label class="fd-checkbox__label" for="Ai9ek673"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell fd-table__cell--valid">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai9ek69s">
                <label class="fd-checkbox__label" for="Ai9ek69s"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator fd-table__cell--status-indicator--warning"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai9ekk69s">
                <label class="fd-checkbox__label" for="Ai9ekk69s"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell fd-table__cell--warning">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai73k69s">
                <label class="fd-checkbox__label" for="Ai73k69s"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator fd-table__cell--status-indicator--error"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai734F6s">
                <label class="fd-checkbox__label" for="Ai734F6s"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell fd-table__cell--error">01/26/17</td>
        </tr>  
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai73HE36s">
                <label class="fd-checkbox__label" for="Ai73HE36s"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator fd-table__cell--status-indicator--information"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai7JDE36s">
                <label class="fd-checkbox__label" for="Ai7JDE36s"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell fd-table__cell--information">01/26/17</td>
        </tr>   
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai7JGD6s">
                <label class="fd-checkbox__label" for="Ai7JGD6s"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>                    
    </tbody>
</table>
`;

semanticRows.storyName = 'Semantic';
semanticRows.parameters = {
    docs: {
        storyDescription: `
The table component can display highlight indicators to classify certain items with semantic states. To display status indicators in table, add the \`fd-table__cell--status-indicator\` modifier class to each row. 

**To display semantic highlight indicators, add the following modifier classes to \`fd-table__cell--status-indicator\`:**
        
Semantic states | Modifier class
:-------------------- | :-----------------
Valid | \`--valid\`
Warning | \`--warning\`
Error | \`--error\`
Information | \`--information\` 
    `
    }
};

export const focusableRows = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table With Focusable Rows</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table" role="grid">
    <thead class="fd-table__header">
        <tr class="fd-table__row fd-table__row--focusable" tabindex="-1">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row fd-table__row--focusable" tabindex="-1">
            <td class="fd-table__cell" role="gridcell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell" role="gridcell">First Name</td>
            <td class="fd-table__cell" role="gridcell">Middle Name</td>
            <td class="fd-table__cell" role="gridcell">Last Name</td>
            <td class="fd-table__cell" role="gridcell">01/26/17</td>
        </tr>
        <tr class="fd-table__row fd-table__row--focusable" tabindex="-1">
            <td class="fd-table__cell" role="gridcell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell" role="gridcell">First Name</td>
            <td class="fd-table__cell" role="gridcell">Middle Name</td>
            <td class="fd-table__cell" role="gridcell">Last Name</td>
            <td class="fd-table__cell" role="gridcell">01/26/17</td>
        </tr>
        <tr class="fd-table__row fd-table__row--focusable" tabindex="-1">
            <td class="fd-table__cell" role="gridcell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell" role="gridcell">First Name</td>
            <td class="fd-table__cell" role="gridcell">Middle Name</td>
            <td class="fd-table__cell" role="gridcell">Last Name</td>
            <td class="fd-table__cell" role="gridcell">01/26/17</td>
        </tr>
    </tbody>
</table>
`;

focusableRows.storyName = 'Focusable rows';
focusableRows.parameters = {
    docs: {
        storyDescription: `
Table can display focusable rows by adding the \`fd-table__row--focusable\` modifier class and a valid \`tabindex\` to the rows. It is not recommended to use focusable rows simultaneously with focusable cells.         
    `
    }
};

export const focusableCells = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table With Focusable Cells</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table" role="grid">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1" scope="col">Column Header</th>
            <th class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1" scope="col">Column Header</th>
            <th class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1" scope="col">Column Header</th>
            <th class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1" scope="col">Column Header</th>
            <th class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">First Name</td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">Middle Name</td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">Last Name</td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">First Name</td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">Middle Name</td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">Last Name</td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">First Name</td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">Middle Name</td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">Last Name</td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">01/26/17</td>
        </tr>
    </tbody>
</table>
`;

focusableCells.storyName = 'Focusable cells';
focusableCells.parameters = {
    docs: {
        storyDescription: `
Table can display focusable cells by adding the \`fd-table__cell--focusable\` modifier class and a valid \`tabindex\` to the cells. It is not recommended to use focusable cells simultaneously with focusable rows.
    `
    }
};

export const checkbox = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table With Checkbox Cozy Mode</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--checkbox" scope="col">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox fd-table__checkbox" id="Ai4ez611">
                <label class="fd-checkbox__label fd-table__checkbox-label" for="Ai4ez611"></label>
            </th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row" aria-selected="true">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" checked class="fd-checkbox fd-table__checkbox" id="Ai4ez615">
                <label class="fd-checkbox__label fd-table__checkbox-label" for="Ai4ez615"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox fd-table__checkbox" id="Ai4ez617">
                <label class="fd-checkbox__label fd-table__checkbox-label" for="Ai4ez617"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox fd-table__checkbox" id="Gi4ez611">
                <label class="fd-checkbox__label fd-table__checkbox-label" for="Gi4ez611"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
`;

checkbox.storyName = 'Checkbox';
checkbox.parameters = {
    docs: {
        storyDescription: `
Table can display checkboxes to allow the user to perform bulk actions.
To display checkboxes in table, add the \`fd-table__cell--checkbox\` modifier class to the appropriate cell.
It is recommended to add the parameter \`aria-selected="true"\` to the row that is selected.
Also recommended to add class \`fd-table__checkbox\` to the checkbox (input) and \`fd-table__checkbox-label\` class to the checkbox label to have appropriate styles.
    `
    }
};

export const compactCheckbox = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table With Checkbox Compact Mode</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table fd-table--compact">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--checkbox" scope="col">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox fd-checkbox--compact fd-table__checkbox" id="Ai4HF611">
                <label class="fd-checkbox__label fd-table__checkbox-label" for="Ai4HF611"></label>
            </th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row" aria-selected="true">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" checked class="fd-checkbox fd-checkbox--compact fd-table__checkbox" id="Ai4HFHG1">
                <label class="fd-checkbox__label fd-table__checkbox-label" for="Ai4HFHG1"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox fd-checkbox--compact fd-table__checkbox" id="Ai4JKHG1">
                <label class="fd-checkbox__label fd-table__checkbox-label" for="Ai4JKHG1"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox fd-checkbox--compact fd-table__checkbox" id="Ai4JH23G1">
                <label class="fd-checkbox__label fd-table__checkbox-label" for="Ai4JH23G1"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
`;

compactCheckbox.storyName = 'Checkbox (compact)';
compactCheckbox.parameters = {
    docs: {
        storyDescription: `
Table can be displayed with checkboxes in compact mode. To display checkboxes in table, add the \`fd-table__cell--checkbox\` modifier class to the appropriate cell. It is recommended to add the parameter \`aria-selected="true"\` to the row that is selected.


To display the table in compact mode, add the \`fd-table--compact\` modifier class to the table element.        
    `
    }
};

export const condensedCheckbox = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table With Checkbox Condensed Mode</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table fd-table--condensed">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--checkbox" scope="col">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox fd-checkbox--compact fd-table__checkbox" id="Ai4JH2BF87">
                <label class="fd-checkbox__label fd-table__checkbox-label" for="Ai4JH2BF87"></label>
            </th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row" aria-selected="true">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" checked class="fd-checkbox fd-checkbox--compact fd-table__checkbox" id="Ai4JHf87">
                <label class="fd-checkbox__label fd-table__checkbox-label" for="Ai4JHf87"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox fd-checkbox--compact fd-table__checkbox" id="Ai4Jj67">
                <label class="fd-checkbox__label fd-table__checkbox-label" for="Ai4Jj67"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox fd-checkbox--compact fd-table__checkbox" id="AGjtJj67">
                <label class="fd-checkbox__label fd-table__checkbox-label" for="AGjtJj67"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
`;

condensedCheckbox.storyName = 'Checkbox (condensed)';
condensedCheckbox.parameters = {
    docs: {
        storyDescription: `
Table can be displayed with checkboxes in condensed mode. To display checkboxes in table, add the \`fd-table__cell--checkbox\` modifier class to the appropriate cell. It is recommended to add the parameter \`aria-selected="true"\` to the row that is selected.


To display the table in condensed mode, add the \`fd-table--condensed\` modifier class to the table element.
    `
    }
};

export const pagination = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table With Pagination at The Bottom</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Name</th>
            <th class="fd-table__cell" scope="col">Status</th>
            <th class="fd-table__cell" scope="col">Price</th>
            <th class="fd-table__cell" scope="col">Country</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell">Banana</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--positive">
                    Available
                </span>
            </td>
            <td class="fd-table__cell">5 EUR</td>
            <td class="fd-table__cell">India</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">Pineapple</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--negative">
                    Out of stock
                </span>
            </td>
            <td class="fd-table__cell">2 EUR</td>
            <td class="fd-table__cell">Mexico</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">Orange</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--informative">
                    Temporary unavailable
                </span>
            </td>
            <td class="fd-table__cell">6 EUR</td>
            <td class="fd-table__cell">Spain</td>
        </tr>
    </tbody>
</table>

<div class='fd-pagination'>
    <nav class='fd-pagination__nav'>
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button fd-pagination__button--mobile' aria-label='First' aria-disabled='false'>
            <i class='sap-icon sap-icon--media-rewind'></i>
        </a>
        
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button' aria-label='Previous' aria-disabled='false'>
            <i class='sap-icon sap-icon--navigation-left-arrow'></i>
        </a>
        
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link'>1</a>
        
        <label class='fd-form-label fd-pagination__label' for='secondPageInput'>Page:</label>
        
        <input id='secondPageInput' class='fd-input fd-input--compact fd-pagination__input' type='number' min='1' max='10' value='2' required />
        
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link'>3</a>

        <span class='fd-pagination__more' role='presentation'></span>

        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__link'>10</a>
        
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button' aria-label='Next' aria-disabled='false'>
            <i class='sap-icon sap-icon--navigation-right-arrow'></i>
        </a>
        
        <a href='#' class='fd-button fd-button--compact fd-button--transparent fd-pagination__button fd-pagination__button--mobile' aria-label='Last' aria-disabled='false'>
            <i class='sap-icon sap-icon--media-forward'></i>
        </a>
    </nav>
  
    <div class='fd-pagination__total'>
        <span class='fd-form-label fd-pagination__total-label'>30 Results</span>
    </div>
</div>
`;

pagination.storyName = 'Pagination';
pagination.parameters = {
    docs: {
        storyDescription: `
Table can be displayed with bottom pagination by adding the \`fd-pagination\` class after the table.               
    `
    }
};

export const advancedToolbar = () => `<div class="fd-dialog" id="filter-dialog-example">
    <section class="fd-dialog__content" role="dialog" aria-modal="true" aria-labelledby="dialog-filter">
        <header class="fd-dialog__header fd-bar">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h3 class="fd-dialog__title" id="dialog-filter">
                        Filter By
                    </h3>
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <span class="sap-icon--filter"></span>
                </div>
            </div>
        </header>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
            <ul class="fd-list fd-list--compact">
                <li class="fd-list__item">
                    <span class="fd-list__title">Name</span>
                </li>
                <li class="fd-list__item">
                    <span class="fd-list__title">Status</span>
                </li>
                <li class="fd-list__item">
                    <span class="fd-list__title">Price</span>
                </li>
                <li class="fd-list__item">
                    <span class="fd-list__title">Country</span>
                </li>
            </ul>
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button aria-label="navigation" class="fd-dialog__decisive-button fd-button fd-button--emphasized fd-button--compact" onclick="toggleClass('filter-dialog-example', 'fd-dialog--active')">OK</button>
                </div>
                <div class="fd-bar__element">
                    <button aria-label="navigation" class="fd-dialog__decisive-button fd-button fd-button--transparent fd-button--compact" onclick="toggleClass('filter-dialog-example', 'fd-dialog--active')">Cancel</button>
                </div>
            </div>
        </footer>
    </section>
</div>
<div class="fd-dialog" id="settings-dialog-example">
    <section class="fd-dialog__content" role="dialog" aria-modal="true" aria-labelledby="dialog-settings">
        <header class="fd-dialog__header fd-bar fd-bar--header-with-subheader">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h3 class="fd-dialog__title" id="dialog-settings">
                        Columns
                    </h3>
                </div>
            </div>
        </header>
        <div class="fd-dialog__subheader fd-bar fd-bar--subheader">
            <div class="fd-bar__middle">
                <div class="fd-bar__element">
                    <button aria-label="navigation" class="fd-button fd-button--icon fd-button--transparent fd-button--compact">
                        <i class="sap-icon--arrow-top"></i>
                    </button>
                    <button aria-label="navigation" class="fd-button fd-button--icon fd-button--transparent fd-button--compact">
                        <i class="sap-icon--arrow-bottom"></i>
                    </button>
                </div>
                <div class="fd-bar__element fd-bar__element--full-width">
                    <div class="fd-input-group">
                        <input aria-labelledby="dialog-settings" 
                            class="fd-input fd-input-group__input fd-input--compact" type="text" placeholder="Search...">
                        <span class="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--compact">
                            <button aria-label="navigation"
                                class="fd-button fd-input-group__button fd-button--icon fd-button--transparent fd-button--compact">
                                <i class="sap-icon--search"></i>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
            <ul aria-labelledby="dialog-settings" class="fd-list fd-list--multi-input fd-list--compact"
                aria-multiselectable="true" role="listbox">
                <li class="fd-list__item is-selected" role="option">
                    <input aria-label="checkbox" type="checkbox" checked
                        class="fd-checkbox fd-checkbox--compact fd-list__input" id="GGi4ezFD1">
                    <label class="fd-checkbox__label fd-checkbox__label--compact fd-list__label" for="GGi4ezFD1">
                        <span class="fd-list__title">All</span>
                    </label>
                </li>
                <li class="fd-list__item is-selected" role="option">
                    <input aria-label="checkbox" type="checkbox" checked class="fd-checkbox fd-checkbox--compact fd-list__input" id="GGi4ez641">
                    <label class="fd-checkbox__label fd-checkbox__label--compact fd-list__label" for="GGi4ez641">
                        <span class="fd-list__title">Name</span>
                    </label>
                </li>
                <li class="fd-list__item is-selected" role="option">
                    <input aria-label="checkbox" type="checkbox" checked class="fd-checkbox fd-checkbox--compact fd-list__input" id="Ai4FGFG612">
                    <label class="fd-checkbox__label fd-checkbox__label--compact fd-list__label" for="Ai4FGFG612">
                        <span class="fd-list__title">Status</span>
                    </label>
                </li>
                <li class="fd-list__item is-selected" role="option">
                    <input aria-label="checkbox" type="checkbox" checked class="fd-checkbox fd-checkbox--compact fd-list__input" id="Ai4e88614">
                    <label class="fd-checkbox__label fd-checkbox__label--compact fd-list__label" for="Ai4e88614">
                        <span class="fd-list__title">Price</span>
                    </label>
                </li>
                <li class="fd-list__item is-selected" role="option">
                    <input aria-label="checkbox" type="checkbox" checked class="fd-checkbox fd-checkbox--compact fd-list__input" id="Ai4egh6024">
                    <label class="fd-checkbox__label fd-checkbox__label--compact fd-list__label" for="Ai4egh6024">
                        <span class="fd-list__title">Country</span>
                    </label>
                </li>
            </ul>
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button aria-label="navigation" class="fd-dialog__decisive-button fd-button fd-button--emphasized fd-button--compact" onclick="toggleClass('settings-dialog-example', 'fd-dialog--active')">OK</button>
                </div>
                <div class="fd-bar__element">
                    <button aria-label="navigation" class="fd-dialog__decisive-button fd-button fd-button--transparent fd-button--compact" onclick="toggleClass('settings-dialog-example', 'fd-dialog--active')">Cancel</button>
                </div>
            </div>
        </footer>
    </section>
</div>
<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table With Advanced Shellbar</h4>
    <div class="fd-toolbar__spacer"></div>
    <button aria-label="navigation" class="fd-button fd-button--compact fd-button--transparent" onclick="toggleClass('filter-dialog-example', 'fd-dialog--active')">
        <i class="sap-icon--filter"></i>
    </button>
    <button aria-label="navigation" class="fd-button fd-button--compact fd-button--transparent" onclick="toggleClass('settings-dialog-example', 'fd-dialog--active')">
        <i class="sap-icon--action-settings"></i>
    </button>
</div>
<table class="fd-table fd-table--compact">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Name</th>
            <th class="fd-table__cell" scope="col">Status</th>
            <th class="fd-table__cell" scope="col">Price</th>
            <th class="fd-table__cell" scope="col">Country</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell">Banana</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--positive">
                    Available
                </span>
            </td>
            <td class="fd-table__cell">5 EUR</td>
            <td class="fd-table__cell">India</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">Pineapple</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--negative">
                    Out of stock
                </span>
            </td>
            <td class="fd-table__cell">2 EUR</td>
            <td class="fd-table__cell">Mexico</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">Orange</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--informative">
                    Temporary unavailable
                </span>
            </td>
            <td class="fd-table__cell">6 EUR</td>
            <td class="fd-table__cell">Spain</td>
        </tr>
    </tbody>
</table>
`;

advancedToolbar.storyName = 'Advanced toolbar';
advancedToolbar.parameters = {
    docs: {
        storyDescription: `
The table component can be displayed with an advanced **Toolbar**, which allows users to customize their table. In this example, buttons trigger **Dialogs**. To display an advanced toolbar, pair \`fd-dialog\` components with an \`fd-toolbar\` component.             
    `
    }
};

export const contextualMenu = () => `<div style="min-height: 400px">
<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table with Contextual Menu</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table" >
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col"></th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">01/26/17</td>
            <td class="fd-table__cell fd-table__cell--fit-content">
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <button aria-label="navigation" class="fd-button fd-button--transparent" aria-controls="pQqQRFF3" aria-haspopup="true" aria-expanded="false" aria-label="More"
                        onclick="onPopoverClick('pQqQRFF3')">
                            <i class="sap-icon--overflow"></i>
                        </button>
                    </div>
                    <div class="fd-popover__body fd-popover__body--right" aria-hidden="true" id="pQqQRFF3">
                        <nav class="fd-menu">
                            <ul class="fd-menu__list fd-menu__list--no-shadow">
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Option 1</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Option 2</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Option 3</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">01/26/17</td>
            <td class="fd-table__cell fd-table__cell--fit-content">
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <button aria-label="navigation" class="fd-button fd-button--transparent" aria-controls="G54qQRFF3" aria-haspopup="true" aria-expanded="false" aria-label="More" onclick="onPopoverClick('G54qQRFF3')">
                            <i class="sap-icon--overflow"></i>
                        </button>
                    </div>
                    <div class="fd-popover__body fd-popover__body--right" aria-hidden="true" id="G54qQRFF3">
                        <nav class="fd-menu">
                            <ul class="fd-menu__list fd-menu__list--no-shadow">
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Option 1</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Option 2</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Option 3</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">01/26/17</td>
            <td class="fd-table__cell fd-table__cell--fit-content">
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <button aria-label="navigation" class="fd-button fd-button--transparent" aria-controls="G54JRFF3" aria-haspopup="true" aria-expanded="false" aria-label="More" onclick="onPopoverClick('G54JRFF3')">
                            <i class="sap-icon--overflow"></i>
                        </button>
                    </div>
                    <div class="fd-popover__body fd-popover__body--right" aria-hidden="true" id="G54JRFF3">
                        <nav class="fd-menu">
                            <ul class="fd-menu__list fd-menu__list--no-shadow">
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Option 1</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Option 2</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Option 3</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </td>
        </tr>
    </tbody>
</table>
</div>
`;

contextualMenu.storyName = 'Contextual menu';
contextualMenu.parameters = {
    docs: {
        storyDescription: `
Table can display a contextual menu containing actions if there is not enough space in a given row. It is recommended to use a contextual menu if there are more than three actions. To display table with a contextual menu, add the \`fd-popover\` component to any given cell. See **Popover** for more details.
    `
    }
};

export const menuHeader = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table with Popover in Headers</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table" >
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">
                <div class="fd-table__popover fd-popover">
                    <div class="fd-popover__control" aria-controls="popoverA1" aria-expanded="false" aria-haspopup="true">
                        <div class="fd-table__inner">
                            Column Header Ascending
                            <span class="fd-table__icon sap-icon--sort-ascending"></span>
                        </div>
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="popoverA1">
                        <ul class="fd-list fd-list--compact" role="list">
                            <li tabindex="0" role="listitem" class="fd-list__item">
                                <span class="fd-list__icon sap-icon--sort-descending"></span>
                                <span class="fd-list__title">Sort Descending</span>
                            </li>
                            <li tabindex="0" role="listitem" class="fd-list__item">
                                <span class="fd-list__icon sap-icon--sort-ascending"></span>
                                <span class="fd-list__title">Sort Ascendnig</span>
                            </li>
                            <li role="listitem" class="fd-list__item">
                                <span class="fd-list__icon sap-icon--filter"></span>
                                <div class="fd-form-item  fd-form-item--horizontal">
                                    <label class="fd-form-label" for="input-1d">Filter</label>
                                    <input class="fd-input fd-input--compact" id="input-1d">
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </th>
            <th class="fd-table__cell" scope="col">
                <div class="fd-table__popover fd-popover">
                    <div class="fd-popover__control" aria-controls="popoverA2" aria-expanded="false" aria-haspopup="true">
                        <div class="fd-table__inner">
                            Column Header Descending
                            <span class="fd-table__icon sap-icon--sort-descending"></span>
                        </div>
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="popoverA2">
                        <ul class="fd-list fd-list--compact" role="list">
                            <li tabindex="0" role="listitem" class="fd-list__item">
                                <span class="fd-list__icon sap-icon--sort-descending"></span>
                                <span class="fd-list__title">Sort Descending</span>
                            </li>
                            <li tabindex="0" role="listitem" class="fd-list__item">
                                <span class="fd-list__icon sap-icon--sort-ascending"></span>
                                <span class="fd-list__title">Sort Ascendnig</span>
                            </li>
                            <li role="listitem" class="fd-list__item">
                                <span class="fd-list__icon sap-icon--filter"></span>
                                <div class="fd-form-item  fd-form-item--horizontal">
                                    <label class="fd-form-label" for="input-1d">Filter</label>
                                    <input class="fd-input fd-input--compact" id="input-1d2">
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
`;

menuHeader.storyName = 'Menu header';
menuHeader.parameters = {
    docs: {
        storyDescription: `
Table can display menu options from a popover within headers. The example below demonstrates headers containing customization actions such as _Ascending_ and _Descending_. To display a menu within a header, add the \`fd-table__popover\` class to the header cells.
    `
    }
};

export const fixColumnHeader = () => `<style>
        .fd-table--fixed {
            padding-left: 200px;
        }

        [dir=rtl] .fd-table--fixed,
        .fd-table--fixed[dir=rtl] {
            padding-left: 0;
            padding-right: 200px;            
        }
        
        .fd-table--fixed .fd-table__cell {
            min-width: 200px;
            max-width: 200px;
        }
</style>
<div style="position: relative">
    <div class="fd-table--fixed">
        <table class="fd-table">
            <thead class="fd-table__header">
                <tr class="fd-table__row">
                    <th class="fd-table__cell fd-table__cell--fixed fd-table__cell--fixed-last"  aria-haspopup="true" scope="col">
                        Header Column
                    </th>
                    <th class="fd-table__cell" scope="col">
                        Header Column
                    </th>
                    <th class="fd-table__cell" scope="col">
                        Header Column
                    </th>
                    <th class="fd-table__cell" scope="col">
                        Header Column
                    </th>
                    <th class="fd-table__cell" scope="col">
                        Header Column
                    </th>
                    <th class="fd-table__cell" scope="col">
                        Header Column
                    </th>
                    <th class="fd-table__cell" scope="col">
                        Header Column
                    </th>
                    <th class="fd-table__cell" scope="col">
                        Header Column
                    </th>
                </tr>
            </thead>
            <tbody class="fd-table__body">
                <tr class="fd-table__row">
                    <th class="fd-table__cell fd-table__cell--fixed fd-table__cell--fixed-last" scope="row">Row header</th>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                </tr>
                <tr class="fd-table__row">
                    <th class="fd-table__cell fd-table__cell--fixed fd-table__cell--fixed-last" scope="row">Row header</th>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                </tr>
                <tr class="fd-table__row">
                    <th class="fd-table__cell fd-table__cell--fixed fd-table__cell--fixed-last" scope="row">Row header</th>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
`;

fixColumnHeader.storyName = 'Fixed header';
fixColumnHeader.parameters = {
    docs: {
        storyDescription: `
Table can display columns with a fixed header.
To display fixed headers, wrap the table with the \`fd-table--fixed\` modifier class.
In addition, add the \`fd-table__cell--fixed\` modifier class to each cell element, it should be propagated to the entire row. 
Then apply \`.fd-table__cell--fixed-last\` to every last fixed cell in every column to have special border after the fixed columns.

It’s important to hardcode the width of the columns, otherwise the cells will be squished.
    `
    }
};

export const navIcon = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4>Responsive Table - row navigation</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table fd-table--responsive fd-table--no-horizontal-borders">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Name</th>
            <th class="fd-table__cell" scope="col">Status</th>
            <th class="fd-table__cell" scope="col">Price</th>
            <th class="fd-table__cell" scope="col">Country</th>
            <th class="fd-table__cell"></th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row fd-table__row--activable fd-table__row--hoverable">
            <td class="fd-table__cell">Banana</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--positive">
                    Available
                </span>
            </td>
            <td class="fd-table__cell">5 EUR</td>
            <td class="fd-table__cell">India</td>
            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                <i class="fd-table__icon fd-table__icon--navigation sap-icon--slim-arrow-right" role="presentation"></i>
            </td>
        </tr>
        <tr class="fd-table__row fd-table__row--activable fd-table__row--hoverable">
            <td class="fd-table__cell">Pineapple</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--negative">
                    Out of stock
                </span>
            </td>
            <td class="fd-table__cell">2 EUR</td>
            <td class="fd-table__cell">Mexico</td>
            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                <i class="fd-table__icon fd-table__icon--navigation sap-icon--slim-arrow-right" role="presentation"></i>
            </td>
        </tr>
        <tr class="fd-table__row fd-table__row--activable fd-table__row--hoverable">
            <td class="fd-table__cell">Orange</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--informative">
                    Temporary unavailable
                </span>
            </td>
            <td class="fd-table__cell">6 EUR</td>
            <td class="fd-table__cell">Spain</td>
            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                <i class="fd-table__icon fd-table__icon--navigation sap-icon--slim-arrow-right" role="presentation"></i>
            </td>
        </tr>
    </tbody>
</table>
<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4>Table - icon button for navigation</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table ">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Name</th>
            <th class="fd-table__cell" scope="col">Status</th>
            <th class="fd-table__cell" scope="col">Price</th>
            <th class="fd-table__cell" scope="col">Country</th>
            <th class="fd-table__cell"></th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell">Banana</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--positive">
                    Available
                </span>
            </td>
            <td class="fd-table__cell">5 EUR</td>
            <td class="fd-table__cell">India</td>
            <td class="fd-table__cell fd-table__cell--fit-content">
                <button aria-label="navigation" class="fd-button fd-button--transparent">
                    <i class="sap-icon--navigation-right-arrow"></i>
                </button>
            </td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">Pineapple</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--negative">
                    Out of stock
                </span>
            </td>
            <td class="fd-table__cell">2 EUR</td>
            <td class="fd-table__cell">Mexico</td>
            <td class="fd-table__cell fd-table__cell--fit-content">
                <button aria-label="navigation" class="fd-button fd-button--transparent">
                    <i class="sap-icon--navigation-right-arrow"></i>
                </button>
            </td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">Orange</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--informative">
                    Temporary unavailable
                </span>
            </td>
            <td class="fd-table__cell">6 EUR</td>
            <td class="fd-table__cell">Spain</td>
            <td class="fd-table__cell fd-table__cell--fit-content">
                <button aria-label="navigation" class="fd-button fd-button--transparent">
                    <i class="sap-icon--navigation-right-arrow"></i>
                </button>
            </td>
        </tr>
    </tbody>
</table>
`;

navIcon.storyName = 'Navigation from table rows';
navIcon.parameters = {
    docs: {
        storyDescription: `
Responsive table allows navigation from a line item. For that purpose you need to add a column with the icon \`sap-icon--slim-arrow-right\` at the end. The entire line needs to be clickable 

You have an option to add icon button \`sap-icon--navigation-right-arrow\` as a separate column for non responsive table.
    `
    }
};

export const navIndicators = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4>Table with Navigation Indication State</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table fd-table--no-horizontal-borders">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="kqqzPI44">
                <label class="fd-checkbox__label" for="kqqzPI44"></label>
            </th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col"></th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row fd-table__row--activable fd-table__row--hoverable" aria-selected="true">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" checked class="fd-checkbox" id="EWuzWh33">
                <label class="fd-checkbox__label" for="EWuzWh33"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                <i class="fd-table__icon fd-table__icon--navigation sap-icon--slim-arrow-right" role="presentation"></i>
            </td>
        </tr>
        <tr class="fd-table__row fd-table__row--activable fd-table__row--hoverable" aria-selected="true">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" checked class="fd-checkbox" id="EWuzWh334">
                <label class="fd-checkbox__label" for="EWuzWh334"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--navigated fd-table__cell--no-padding">
                <i class="fd-table__icon fd-table__icon--navigation sap-icon--slim-arrow-right" role="presentation"></i>
            </td>
        </tr>
        <tr class="fd-table__row fd-table__row--activable fd-table__row--hoverable">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="EWuzWh335">
                <label class="fd-checkbox__label" for="EWuzWh335"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                <i class="fd-table__icon fd-table__icon--navigation sap-icon--slim-arrow-right" role="presentation"></i>
            </td>
        </tr>
    </tbody>
</table>
`;

navIndicators.storyName = 'Navigation indicators';
navIndicators.parameters = {
    docs: {
        storyDescription: `

The table component can display navigation indicators. When multi-selection is used in a master-detail scenario, it is not clear which item was last opened, you can mark it as a “navigated” indicator, as indicated in the second row, to mark an item that is currently open. To display a navigated indicator, add the \`fd-table__cell--navigated\` class to the desired table cell.
    `
    }
};

export const responsiveTable = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Responsive Table</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table fd-table--responsive fd-table--no-horizontal-borders">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="kqqzPI">
                <label class="fd-checkbox__label" for="kqqzPI"></label>
            </th>
            <th class="fd-table__cell" scope="col">Name</th>
            <th class="fd-table__cell" scope="col">Status</th>
            <th class="fd-table__cell" scope="col">Price</th>
            <th class="fd-table__cell" scope="col">Country</th>
            <th class="fd-table__cell"></th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row fd-table__row--activable fd-table__row--hoverable">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="EWuzWh">
                <label class="fd-checkbox__label" for="EWuzWh"></label>
            </td>
            <td class="fd-table__cell">Banana</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--positive">
                    Available
                </span>
            </td>
            <td class="fd-table__cell">5 EUR</td>
            <td class="fd-table__cell">India</td>
            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                <i class="fd-table__icon fd-table__icon--navigation sap-icon--slim-arrow-right" role="presentation"></i>
            </td>
        </tr>
        <tr class="fd-table__row fd-table__row--activable fd-table__row--hoverable">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="19j0Sc">
                <label class="fd-checkbox__label" for="19j0Sc"></label>
            </td>
            <td class="fd-table__cell">Pineapple</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--negative">
                    Out of stock
                </span>
            </td>
            <td class="fd-table__cell">2 EUR</td>
            <td class="fd-table__cell">Mexico</td>
            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                <i class="fd-table__icon fd-table__icon--navigation sap-icon--slim-arrow-right" role="presentation"></i>
            </td>
        </tr>
        <tr class="fd-table__row fd-table__row--activable fd-table__row--hoverable">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="a7SfGX">
                <label class="fd-checkbox__label" for="a7SfGX"></label>
            </td>
            <td class="fd-table__cell">Orange</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--informative">
                    Temporary unavailable
                </span>
            </td>
            <td class="fd-table__cell">6 EUR</td>
            <td class="fd-table__cell">Spain</td>
            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                <i class="fd-table__icon fd-table__icon--navigation sap-icon--slim-arrow-right" role="presentation"></i>
            </td>
        </tr>
    </tbody>
</table>`;

responsiveTable.storyName = 'Responsive Table';
responsiveTable.parameters = {
    docs: {
        storyDescription: `
The desktop responsive table should contain \`fd-table--responsive\` modifier.
    `
    }
};

export const responsiveTablePopInMode = () => `<div style="max-width: 450px">
    <div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
        <h4 style="margin: 0;">Responsive Table - Pop-in mode</h4>
        <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
    </div>
    <table class="fd-table fd-table--responsive fd-table--no-horizontal-borders fd-table--no-vertical-borders fd-table--pop-in">
        <tbody class="fd-table__body">
            <tr class="fd-table__row fd-table__row--main fd-table__row--activable fd-table__row--hoverable">
                <td class="fd-table__cell">
                    <p class="fd-table__text fd-table__text--title">Banana</p>
                    <p class="fd-table__text">India</p>
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content">
                    5 EUR
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                    <i class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow" role="presentation"></i>
                </td>
            </tr>
            <tr class="fd-table__row fd-table__row--secondary">
                <td class="fd-table__cell" colspan="100%">
                    <p class="fd-table__text">
                        <label class="fd-form-label">Status:</label>
                        <span class="fd-object-status fd-object-status--positive">
                            Available
                        </span>
                    </p>
                    <p class="fd-table__text">
                        <label class="fd-form-label">Date Of Expire:</label>
                        12.01.12
                    </p>
                </td>
            </tr>
            <tr class="fd-table__row fd-table__row--main fd-table__row--activable fd-table__row--hoverable">
                <td class="fd-table__cell">
                    <p class="fd-table__text fd-table__text--title">Very long name for orange, which no one expected, forces text wrapping into another line.</p>
                    <p class="fd-table__text">Spain</p>
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content">
                    6 EUR
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                    <i class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow" role="presentation"></i>
                </td>
            </tr>
            <tr class="fd-table__row fd-table__row--secondary">
                <td class="fd-table__cell" colspan="100%">
                    <p class="fd-table__text">
                        <label class="fd-form-label">Status:</label>
                        <span class="fd-object-status fd-object-status--negative">
                            Out of stock
                        </span>
                    </p>
                    <p class="fd-table__text">
                        <label class="fd-form-label">Date Of Expire:</label>
                        12.01.12
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
</div>
<br>
<div style="max-width: 450px">
    <div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
        <h4 style="margin: 0;">Responsive Table - Pop-in Mode with Checkboxes and Navigation Indicator</h4>
        <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
    </div>
    <table class="fd-table fd-table--responsive fd-table--no-horizontal-borders fd-table--no-vertical-borders fd-table--pop-in">
        <tbody class="fd-table__body">
            <tr class="fd-table__row fd-table__row--main">
                <td class="fd-table__cell fd-table__cell--checkbox">
                    <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="CWkhTG">
                    <label class="fd-checkbox__label" for="CWkhTG"></label>
                </td>
                <td class="fd-table__cell">
                    <p class="fd-table__text fd-table__text--title">Banana</p>
                    <p class="fd-table__text">India</p>
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content">
                    5 EUR
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                    <i class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow" role="presentation"></i>
                </td>
            </tr>
            <tr class="fd-table__row fd-table__row--secondary">
                <td class="fd-table__cell fd-table__cell--checkbox"></td>
                <td class="fd-table__cell" colspan="100%">
                    <p class="fd-table__text">
                        <label class="fd-form-label">Status:</label>
                        <span class="fd-object-status fd-object-status--positive">
                            Available
                        </span>
                    </p>
                    <p class="fd-table__text">
                        <label class="fd-form-label">Date Of Expire:</label>
                        12.01.12
                    </p>
                </td>
            </tr>
            <tr class="fd-table__row fd-table__row--main">
                <td class="fd-table__cell fd-table__cell--checkbox">
                    <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Yeas6w">
                    <label class="fd-checkbox__label" for="Yeas6w"></label>
                </td>
                <td class="fd-table__cell">
                    <p class="fd-table__text fd-table__text--title">Very long name for orange, which no one expected, forces text wrapping into another line.</p>
                    <p class="fd-table__text">Spain</p>
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content">
                    6 EUR
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                    <i class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow" role="presentation"></i>
                </td>
            </tr>
            <tr class="fd-table__row fd-table__row--secondary">
                <td class="fd-table__cell fd-table__cell--checkbox"></td>
                <td class="fd-table__cell" colspan="100%">
                    <p class="fd-table__text">
                        <label class="fd-form-label">Status:</label>
                        <span class="fd-object-status fd-object-status--negative">
                            Out of stock
                        </span>
                    </p>
                    <p class="fd-table__text">
                        <label class="fd-form-label">Date Of Expire:</label>
                        12.01.12
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
</div>
`;

responsiveTablePopInMode.storyName = 'Responsive Table (pop-in mode)';
responsiveTablePopInMode.parameters = {
    docs: {
        storyDescription: `
The responsive table can be displayed in pop-in mode for mobile and tablet screens. To display responsive table in pop-in mode, add the \`fd-table--pop-in\` modifier class to the main element and remove the borders (see borderless example). In pop-in mode, a row actually contains two rows:
-	\`fd-table__row--main\`
-	\`fd-table__row--secondary\`
        
**Note:** cells with titles and text should be wrapped in paragraph tags.
        
    `
    }
};

export const gridTable = () => `<table class="fd-table" aria-describedby="FU4EwF6st">
    <caption class="fd-table__caption" id="FU4EwF6st" aria-live="polite">
        Inventory Status. Use arrow keys to navigate between cells.
    </caption>
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th id="fd-4C0WYEyPqUS" class="fd-table__cell fd-table__cell--checkbox" tabindex="-1">
                <div class="fd-form-item">
                    <input aria-checked="false" aria-label="Select all rows" class="fd-checkbox" id="fd-gEAc87vXrAR" type="checkbox" value="" tabindex="-1" /><label for="fd-gEAc87vXrAR" class="fd-form-label fd-checkbox__label"></label>
                </div>
            </th>
            <th id="fd-KWRjZC5EqkW" class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                Product Name
            </th>
            <th id="fd-NPWFoAxBzUa" class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                Product ID
            </th>
            <th id="fd-jtbiFXSC7Uy" class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                Quantity
            </th>
            <th id="fd-mQuRgWM6D0u" class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                Status
            </th>
            <th id="fd-hEzpEm5PMU2" class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                Supplier
            </th>
            <th id="fd-NujEpyB6EkG" class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                Image
            </th>
            <th id="fd-NMFoRAVbFky" class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                Heavy Weight
            </th>
            <th id="fd-OspcU6H7F0q" class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                Categories
            </th>
            <th id="fd-nEac1Ko5K0e" class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                Delivery Date
            </th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row" aria-selected="false">
            <td class="fd-table__cell fd-table__cell--checkbox" tabindex="-1">
                <div class="fd-form-item">
                    <input aria-checked="false" aria-label="Select row" class="fd-checkbox" id="fd-7EMZOUrG2eK" name="Notebook Basic 15" type="checkbox" value="" tabindex="-1" />
                    <label for="fd-7EMZOUrG2eK" class="fd-form-label fd-checkbox__label"></label>
                </div>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span>Notebook Basic 15</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <input aria-labelledby="fd-NPWFoAxBzUa" class="fd-input" name="Notebook Basic 15" type="text" value="HT-1000" tabindex="-1" />
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span>10</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span class="fd-object-status fd-object-status--positive">Available</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <div class="fd-form-item">
                    <div class="fd-popover fd-popover--full-width">
                        <div class="fd-popover__control">
                            <div class="fd-select" tabindex="-1" aria-labelledby="fd-hEzpEm5PMU2" aria-expanded="false" aria-haspopup="listbox">
                                <div class="fd-select__control">
                                    <span class="fd-select__text-content">Very Best Screens</span>
                                    <span class="fd-button fd-button--transparent fd-select__button"><i aria-hidden="true" class="sap-icon--slim-arrow-down" role="img"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <a href="https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg" class="fd-link" tabindex="-1">Show image</a>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <div class="fd-form-item">
                    <input aria-checked="false" aria-label="Heavy Weight" class="fd-checkbox" id="fd-tF03y4hjeLT" type="checkbox" value="" tabindex="-1" /><label for="fd-tF03y4hjeLT" class="fd-form-label fd-checkbox__label"></label>
                </div>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <input aria-labelledby="fd-OspcU6H7F0q" class="fd-input" type="text" value="" tabindex="-1" />
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <div class="fd-popover fd-popover--full-width">
                    <div class="fd-popover__control">
                        <div aria-expanded="false" aria-haspopup="true" class="fd-input-group--control fd-input-group">
                            <input aria-labelledby="fd-nEac1Ko5K0e" class="fd-input fd-input-group__input" placeholder="MM/DD/YYYY" type="text" value="" tabindex="-1" />
                            <span class="fd-input-group__addon fd-input-group__addon--button">
                                <button aria-label="Choose date" class="fd-button fd-button--transparent fd-input-group__button" type="button" tabindex="-1">
                                    <i aria-hidden="true" class="sap-icon--appointment-2" role="img"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
        <tr class="fd-table__row" aria-selected="false">
            <td class="fd-table__cell fd-table__cell--checkbox" tabindex="-1">
                <div class="fd-form-item">
                    <input aria-checked="false" aria-label="Select row" class="fd-checkbox" id="fd-LbUmEre6JKj" name="Notebook Basic 17" type="checkbox" value="" tabindex="-1" />
                    <label for="fd-LbUmEre6JKj" class="fd-form-label fd-checkbox__label"></label>
                </div>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span>Notebook Basic 17</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <input aria-labelledby="fd-NPWFoAxBzUa" class="fd-input" name="Notebook Basic 17" type="text" value="HT-1001" tabindex="-1" />
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span>0</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span class="fd-object-status fd-object-status--negative">Out of stock</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <div class="fd-form-item">
                    <div class="fd-popover fd-popover--full-width">
                        <div class="fd-popover__control">
                            <div class="fd-select" tabindex="-1" aria-labelledby="fd-hEzpEm5PMU2" aria-expanded="false" aria-haspopup="listbox">
                                <div class="fd-select__control">
                                    <span class="fd-select__text-content">Fasttech</span>
                                    <span class="fd-button fd-button--transparent fd-select__button"><i aria-hidden="true" class="sap-icon--slim-arrow-down" role="img"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <a href="https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1001.jpg" class="fd-link" tabindex="-1">Show image</a>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <div class="fd-form-item">
                    <input aria-checked="false" aria-label="Heavy Weight" class="fd-checkbox" id="fd-9WXDOs3SBLH" type="checkbox" value="" tabindex="-1" /><label for="fd-9WXDOs3SBLH" class="fd-form-label fd-checkbox__label"></label>
                </div>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <input aria-labelledby="fd-OspcU6H7F0q" class="fd-input" type="text" value="" tabindex="-1" />
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <div class="fd-popover fd-popover--full-width">
                    <div class="fd-popover__control">
                        <div aria-expanded="false" aria-haspopup="true" class="fd-input-group--control fd-input-group">
                            <input aria-labelledby="fd-nEac1Ko5K0e" class="fd-input fd-input-group__input" placeholder="MM/DD/YYYY" type="text" value="" tabindex="-1" />
                            <span class="fd-input-group__addon fd-input-group__addon--button">
                                <button aria-label="Choose date" class="fd-button fd-button--transparent fd-input-group__button" type="button" tabindex="-1">
                                    <i aria-hidden="true" class="sap-icon--appointment-2" role="img"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
        <tr class="fd-table__row" aria-selected="false">
            <td class="fd-table__cell fd-table__cell--checkbox" tabindex="-1">
                <div class="fd-form-item">
                    <input aria-checked="false" aria-label="Select row" class="fd-checkbox" id="fd-Cmvc_Hc7N3_" name="Notebook Basic 18" type="checkbox" value="" tabindex="-1" />
                    <label for="fd-Cmvc_Hc7N3_" class="fd-form-label fd-checkbox__label"></label>
                </div>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span>Notebook Basic 18</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <input aria-labelledby="fd-NPWFoAxBzUa" class="fd-input" name="Notebook Basic 18" type="text" value="HT-1002" tabindex="-1" />
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span>13</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span class="fd-object-status fd-object-status--positive">Available</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <div class="fd-form-item">
                    <div class="fd-popover fd-popover--full-width">
                        <div class="fd-popover__control">
                            <div class="fd-select" tabindex="-1" aria-labelledby="fd-hEzpEm5PMU2" aria-expanded="false" aria-haspopup="listbox">
                                <div class="fd-select__control">
                                    <span class="fd-select__text-content">Printers for All</span>
                                    <span class="fd-button fd-button--transparent fd-select__button"><i aria-hidden="true" class="sap-icon--slim-arrow-down" role="img"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <a href="https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1002.jpg" class="fd-link" tabindex="-1">Show image</a>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <div class="fd-form-item">
                    <input aria-checked="false" aria-label="Heavy Weight" class="fd-checkbox" id="fd-Rzaro06MMoH" type="checkbox" value="" tabindex="-1" /><label for="fd-Rzaro06MMoH" class="fd-form-label fd-checkbox__label"></label>
                </div>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <input aria-labelledby="fd-OspcU6H7F0q" class="fd-input" type="text" value="" tabindex="-1" />
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <div class="fd-popover fd-popover--full-width">
                    <div class="fd-popover__control">
                        <div aria-expanded="false" aria-haspopup="true" class="fd-input-group--control fd-input-group">
                                <input aria-labelledby="fd-nEac1Ko5K0e" class="fd-input fd-input-group__input" placeholder="MM/DD/YYYY" type="text" value="" tabindex="-1" />
                                <span class="fd-input-group__addon fd-input-group__addon--button">
                                    <button aria-label="Choose date" class="fd-button fd-button--transparent fd-input-group__button" type="button" tabindex="-1">
                                        <i aria-hidden="true" class="sap-icon--appointment-2" role="img"></i>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
        <tr class="fd-table__row" aria-selected="false">
            <td class="fd-table__cell fd-table__cell--checkbox" tabindex="-1">
                <div class="fd-form-item">
                    <input aria-checked="false" aria-label="Select row" class="fd-checkbox" id="fd-kgZvkuwUtB-" name="Notebook Basic 19" type="checkbox" value="" tabindex="-1" />
                    <label for="fd-kgZvkuwUtB-" class="fd-form-label fd-checkbox__label"></label>
                </div>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span>Notebook Basic 19</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <input aria-labelledby="fd-NPWFoAxBzUa" class="fd-input" name="Notebook Basic 19" type="text" value="HT-1003" tabindex="-1" />
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span>15</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span class="fd-object-status fd-object-status--positive">Available</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <div class="fd-form-item">
                    <div class="fd-popover fd-popover--full-width">
                        <div class="fd-popover__control">
                            <div class="fd-select" tabindex="-1" aria-labelledby="fd-hEzpEm5PMU2" aria-expanded="false" aria-haspopup="listbox">
                                <div class="fd-select__control">
                                    <span class="fd-select__text-content">Technocom</span>
                                    <span class="fd-button fd-button--transparent fd-select__button"><i aria-hidden="true" class="sap-icon--slim-arrow-down" role="img"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <a href="https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1003.jpg" class="fd-link" tabindex="-1">Show image</a>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <div class="fd-form-item">
                    <input aria-checked="false" aria-label="Heavy Weight" class="fd-checkbox" id="fd-LHL3aUwc6pZ" type="checkbox" value="" tabindex="-1" /><label for="fd-LHL3aUwc6pZ" class="fd-form-label fd-checkbox__label"></label>
                </div>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <input aria-labelledby="fd-OspcU6H7F0q" class="fd-input" type="text" value="" tabindex="-1" />
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <div class="fd-popover fd-popover--full-width">
                    <div class="fd-popover__control">
                        <div aria-expanded="false" aria-haspopup="true" class="fd-input-group--control fd-input-group">
                            <input aria-labelledby="fd-nEac1Ko5K0e" class="fd-input fd-input-group__input" placeholder="MM/DD/YYYY" type="text" value="" tabindex="-1" />
                            <span class="fd-input-group__addon fd-input-group__addon--button">
                                <button aria-label="Choose date" class="fd-button fd-button--transparent fd-input-group__button" type="button" tabindex="-1">
                                    <i aria-hidden="true" class="sap-icon--appointment-2" role="img"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
    </tbody>
</table>
`;

gridTable.storyName = 'Grid Table';
gridTable.parameters = {
    docs: {
        storyDescription: `
Grid tables can contain various input elements inside of cells, such as checkboxes, input fields, links and drop-down menus.

####Accessibility
Information about the table such as a title, summary, and/or keyboard navigation instructions should be provided in captions for screen readers. To caption table information, use the \`fd-table__caption\` class.        
    `
    }
};

export const noDataTable = () => `<table class="fd-table">
        <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">
                Header Column
            </th>
            <th class="fd-table__cell" scope="col">
                Header Column
            </th>
            <th class="fd-table__cell" scope="col">
                Header Column
            </th>
            <th class="fd-table__cell" scope="col">
                Header Column
            </th>
            <th class="fd-table__cell" scope="col">
                Header Column
            </th>
            <th class="fd-table__cell" scope="col">
                Header Column
            </th>
        </tr>
        </thead>
        <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td colspan="100%" class="fd-table__cell fd-table__cell--no-data">No Items available.</td>
        </tr>
        </tbody>
    </table>
`;

noDataTable.storyName = 'Table without data';
noDataTable.parameters = {
    docs: {
        storyDescription: `
Table can indicate that there is no data to display.
    `
    }
};

export const groupRowsInTable = () => `<table class="fd-table fd-table--group">
        <thead class="fd-table__header">
            <tr class="fd-table__row">
                <th class="fd-table__cell" scope="col">
                    Type
                </th>
                <th class="fd-table__cell" scope="col">
                    First Name
                </th>
                <th class="fd-table__cell" scope="col">
                    Last Name
                </th>
                <th class="fd-table__cell" scope="col">
                    Date
                </th>
            </tr>
        </thead>
        <tbody class="fd-table__body">
            <tr class="fd-table__row">
                <td class="fd-table__cell fd-table__cell--group fd-table__cell--expand" colspan="4" data-nesting-level="1">
                    <span class="fd-table__expand fd-table__expand"></span><span class="fd-table__text--no-wrap">Group row (collapsed), level 1</span>
                </td>
            </tr>
            <tr class="fd-table__row">
                <td class="fd-table__cell fd-table__cell--group fd-table__cell--expand" colspan="4" data-nesting-level="1">
                    <span class="fd-table__expand fd-table__expand--open"></span><span class="fd-table__text--no-wrap">Group row (expanded), level 1</span>
                </td>
            </tr>
            <tr class="fd-table__row">
                <td class="fd-table__cell" data-nesting-level="2">Regular row, level 2</td>
                <td class="fd-table__cell">First Name</td>
                <td class="fd-table__cell">Last Name</td>
                <td class="fd-table__cell">01/26/17</td>
            </tr>
            <tr class="fd-table__row">
                <td class="fd-table__cell fd-table__cell--group fd-table__cell--expand" colspan="4" data-nesting-level="2">
                    <span class="fd-table__expand fd-table__expand--open"></span><span class="fd-table__text--no-wrap">Group row (expanded), level 2</span>
                </td>
            </tr>
            <tr class="fd-table__row">
                <td class="fd-table__cell" data-nesting-level="3">Regular row, level 3</td>
                <td class="fd-table__cell">First Name</td>
                <td class="fd-table__cell">Last Name</td>
                <td class="fd-table__cell">01/26/17</td>
            </tr>
        </tbody>
    </table>
`;

groupRowsInTable.storyName = 'Table with group rows';
groupRowsInTable.parameters = {
    docs: {
        storyDescription: `
Table can have group rows, to get this do the following:

- Add \`fd-table--group\` class to the table
- Add \`colspan\` with the appropriate value to the group cell
- Add \`fd-table__cell--group\` to the group cell
- Add \`data-nesting-level\` attribute with the appropriate value (counting starts from 1) to the first cell of every row

Group cell intended to have glyph which indicates expand/collapsed state, to get it to do the following:

- Add \`fd-table__cell--expand\` class to the group cell
- Add an element with class \`fd-table__expand\` inside the group cell
- Use \`fd-table__expand--open\` class on the element to indicate expanded state

Intended to have up to 20 levels deep, not more.

Please consider that you need to implement expanding/collapsing functionality by yourself.
    `
    }
};

export const treeRowsTable = () => `<table class="fd-table fd-table--tree">
        <thead class="fd-table__header">
            <tr class="fd-table__row">
                <th class="fd-table__cell" scope="col">
                    Type
                </th>
                <th class="fd-table__cell" scope="col">
                    First Name
                </th>
                <th class="fd-table__cell" scope="col">
                    Last Name
                </th>
                <th class="fd-table__cell" scope="col">
                    Date
                </th>
            </tr>
        </thead>
        <tbody class="fd-table__body">
            <tr class="fd-table__row">
                <td class="fd-table__cell fd-table__cell" data-nesting-level="1">
                    Regular row, level 1
                </td>
                <td class="fd-table__cell">First Name</td>
                <td class="fd-table__cell">Last Name</td>
                <td class="fd-table__cell">01/26/17</td>
            </tr>
            <tr class="fd-table__row">
                <td class="fd-table__cell fd-table__cell fd-table__cell--expand" data-nesting-level="1">
                    <span class="fd-table__expand fd-table__expand"></span><span class="fd-table__text--no-wrap">Tree row, level 1, collapsed</span>
                </td>
                <td class="fd-table__cell">First Name</td>
                <td class="fd-table__cell">Last Name</td>
                <td class="fd-table__cell">01/26/17</td>
            </tr>
            <tr class="fd-table__row">
                <td class="fd-table__cell fd-table__cell fd-table__cell--expand" data-nesting-level="1">
                    <span class="fd-table__expand fd-table__expand--open"></span><span class="fd-table__text--no-wrap">Tree row, level 1, expanded</span>
                </td>
                <td class="fd-table__cell">First Name</td>
                <td class="fd-table__cell">Last Name</td>
                <td class="fd-table__cell">01/26/17</td>
            </tr>
            <tr class="fd-table__row">
                <td class="fd-table__cell fd-table__cell" data-nesting-level="2">
                    Regular row, level 2
                </td>
                <td class="fd-table__cell">First Name</td>
                <td class="fd-table__cell">Last Name</td>
                <td class="fd-table__cell">01/26/17</td>
            </tr>
            <tr class="fd-table__row">
                <td class="fd-table__cell fd-table__cell fd-table__cell--expand" data-nesting-level="2">
                    <span class="fd-table__expand fd-table__expand"></span><span class="fd-table__text--no-wrap">Tree row, level 2, collapsed</span>
                </td>
                <td class="fd-table__cell">First Name</td>
                <td class="fd-table__cell">Last Name</td>
                <td class="fd-table__cell">01/26/17</td>
            </tr>
            <tr class="fd-table__row">
                <td class="fd-table__cell fd-table__cell fd-table__cell--expand" data-nesting-level="2">
                    <span class="fd-table__expand fd-table__expand--open"></span><span class="fd-table__text--no-wrap">Tree row, level 2, expanded</span>
                </td>
                <td class="fd-table__cell">First Name</td>
                <td class="fd-table__cell">Last Name</td>
                <td class="fd-table__cell">01/26/17</td>
            </tr>
            <tr class="fd-table__row">
                <td class="fd-table__cell fd-table__cell" data-nesting-level="3">
                    Regular row, level 3
                </td>
                <td class="fd-table__cell">First Name</td>
                <td class="fd-table__cell">Last Name</td>
                <td class="fd-table__cell">01/26/17</td>
            </tr>
            <tr class="fd-table__row">
                <td class="fd-table__cell fd-table__cell fd-table__cell--expand" data-nesting-level="3">
                    <span class="fd-table__expand fd-table__expand"></span><span class="fd-table__text--no-wrap">Tree row, level 3, collapsed</span>
                </td>
                <td class="fd-table__cell">First Name</td>
                <td class="fd-table__cell">Last Name</td>
                <td class="fd-table__cell">01/26/17</td>
            </tr>
        </tbody>
    </table>
`;

treeRowsTable.storyName = 'Tree Table';
treeRowsTable.parameters = {
    docs: {
        storyDescription: `
Table can show tree-like rows, to get this do the following:

- Add \`fd-table--tree\` class to the table
- Add \`data-nesting-level\` attribute with the appropriate value (counting starts from 1) to the first cell of every row

Tree table cells intended to have a glyph which indicates expanded/collapsed state, to get it to do the following:

- Add \`fd-table__cell--tree-expand\` class to the first cell if the row has children
- Add an element with class \`fd-table__expand\` inside the tree cell if the row has children
- Use \`fd-table__expand--open\` class on the element to indicate expanded state

Intended to have up to 20 levels deep, not more.

Please consider that you need to implement expanding/collapsing functionality by yourself.
    `
    }
};

const localStyles = `<style>
    :root {
        --sapIllus_BrandColorPrimary: var(--sapContent_Illustrative_Color1);
        --sapIllus_BrandColorSecondary: var(--sapContent_Illustrative_Color2);
        --sapIllus_AccentColor: var(--sapContent_Illustrative_Color3);
        --sapIllus_StrokeDetailColor: var(--sapContent_Illustrative_Color4);
        --sapIllus_Layering1: var(--sapContent_Illustrative_Color5);
        --sapIllus_Layering2: var(--sapContent_Illustrative_Color6);
        --sapIllus_BackgroundColor: var(--sapContent_Illustrative_Color7);
        --sapIllus_ObjectFillColor: var(--sapContent_Illustrative_Color8);
        --sapIllus_NoColor: none;
        --sapIllus_PatternShadow: url(#sapIllus_PatternShadow);
        --sapIllus_PatternHighlight: url(#sapIllus_PatternHighlight);
    }
</style>
`;

export const emptyTable = () => `<table class="fd-table fd-table__empty">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">
                Type
            </th>
            <th class="fd-table__cell" scope="col">
                First Name
            </th>
            <th class="fd-table__cell" scope="col">
                Last Name
            </th>
            <th class="fd-table__cell" scope="col">
                Date
            </th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr>
            <td colspan="3">
                <div style="width: 100%; display: flex; justify-content: center">
                    <figure class="fd-illustrated-message">
                        <svg class="fd-illustrated-message__illustration" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="320" height="240" viewBox="0 0 320 240" id="sapIllus-Scene-NoMail">
                        <path class="sapIllus_BackgroundColor" style="fill:var(--sapIllus_BackgroundColor)" d="M160.9349,25c-63.5127,0-117,45.65-117,111.0215,0,57.985,53.4873,102.9785,117,102.9785s115-45.0093,115-102.9944C275.9349,72.6147,224.4477,25,160.9349,25Z" />
                        <path class="sapIllus_ObjectFillColor" style="fill:var(--sapIllus_ObjectFillColor)" d="M154.41,88.5248l1.27-.8982c.083-.0588.1743-.0987.2588-.1543l.3369-.2319-.272.1933a8.7808,8.7808,0,0,1,9.8.18l4.4263,3.0712,68.4668,46.5077c9.1367-6.9,15.7255-11.8942,17.143-12.9688a8.2264,8.2264,0,0,0-2.6469-3.1792L165.47,58.5277a8.2316,8.2316,0,0,0-9.5674.0088L68.3763,121.1752a8.2141,8.2141,0,0,0-2.2954,2.5366c1.9439,1.5221,8.5494,6.6905,17.4517,13.62Z" />
                        <path class="sapIllus_ObjectFillColor" style="fill:var(--sapIllus_ObjectFillColor)" d="M108.8949,228.8754l39.0273-28.21,5.6529-4.1093L65.5863,124.6974a8.2081,8.2081,0,0,0-.6514,3.1721v67.3023A114.4593,114.4593,0,0,0,108.8949,228.8754Z" />
                        <path class="sapIllus_ObjectFillColor" style="fill:var(--sapIllus_ObjectFillColor)" d="M199.6752,219.5612l13.2217,9.5757a111.1492,111.1492,0,0,0,43.75-34.1394v-67.25a8.1879,8.1879,0,0,0-.4126-2.5244l-88.8384,70.9013Z" />
                        <path class="sapIllus_Layering2" style="fill:var(--sapIllus_Layering2)" d="M161.4076,239.8373A127.1611,127.1611,0,0,0,211.7054,229.66l-44.4179-33.449L165.6727,197.5a9.9255,9.9255,0,0,1-4.8164,2.0576v.11c-.2187,0-.436-.04-.6552-.0552-.2183.0151-.4356.0552-.6543.0552v-.11A9.918,9.918,0,0,1,154.73,197.5l-1.0645-.87-43.584,32.758A129.9029,129.9029,0,0,0,161.4076,239.8373Z" />
                        <path class="sapIllus_BrandColorSecondary" style="fill:var(--sapIllus_BrandColorSecondary)" d="M191.9257,105.94,165.16,87.24l5.07,3.4442-4.4263-3.0712a8.7806,8.7806,0,0,0-9.8-.18l-71.3877,50.74c8.7324,6.7949,19.4937,15.1414,30.1729,23.3565q2.7714,2.1324,5.5244,4.2441c13.5654,10.4028,26.395,20.1113,34.0459,25.582a12.7645,12.7645,0,0,0,3.7881,1.2576c.2309.0388.4731.0686.7182.0962a12.788,12.788,0,0,0,7.1792-1.3538c14.8945-10.6494,49.9448-37.0171,71.6738-53.425Z" />
                        <path class="sapIllus_PatternShadow" style="fill:var(--sapIllus_PatternShadow)" d="M114.7885,161.53c1.8476,1.4216,37.7428,28.9382,38.7428,29.2194s1,1.2812,4.6156,1.8643c.2309.0388.0521-.2245.7182.0962s3.6319-.1428,3.6319-.1428a12.786,12.786,0,0,0,3.5473-1.2109c14.8945-10.65,49.9448-37.0171,71.6738-53.4251L191.9257,105.94Q153.3571,133.7349,114.7885,161.53Z" />
                        <path class="sapIllus_StrokeDetailColor" style="fill:var(--sapIllus_StrokeDetailColor)" d="M253.7728,120.23,166.05,57.7133a9.2324,9.2324,0,0,0-10.73.0107L67.7943,120.3627a9.2487,9.2487,0,0,0-3.8594,7.5068v65.9968c.167.2205.3316.4422.5.6614q.2492.3229.5.6441V127.87a8.2081,8.2081,0,0,1,.6514-3.1721l87.9888,71.8586.0151.0125-5.668,4.0969-39.0273,28.21c.0464.02.0938.04.14.06.3472.1533.6978.3023,1.0469.4524l43.584-32.758,1.0644.87a9.9193,9.9193,0,0,0,4.8165,2.0576v.11c.2187,0,.436-.04.6543-.0552.2192.0151.4365.0552.6552.0552v-.11a9.9265,9.9265,0,0,0,4.8164-2.0576l1.6148-1.2891,44.4179,33.449c.3921-.1687.7813-.3413,1.1709-.5137l.0206-.0093-13.2217-9.5756-32.3184-23.4056.0391-.0312,88.8384-70.9014a8.1879,8.1879,0,0,1,.4126,2.5244v67.25c.1689-.2226.333-.448.5-.6718.1679-.2259.3339-.4532.5-.68v-65.898A9.2493,9.2493,0,0,0,253.7728,120.23Zm-15.0761,16.9624L170.23,90.6846,165.16,87.24,191.9257,105.94l45.7924,31.9915c-21.729,16.4079-56.7793,42.7756-71.6738,53.425a12.7821,12.7821,0,0,1-3.5473,1.211,10.993,10.993,0,0,1-3.6319.1428c-.2451-.0276-.4873-.0574-.7182-.0962l-.0522-.0089a12.1683,12.1683,0,0,1-5.0281-2.1773c-7.7549-5.599-19.9253-14.8157-32.7537-24.6534q-2.7474-2.1075-5.5244-4.2441c-10.6792-8.2151-21.44-16.5616-30.1729-23.3565l71.3877-50.74.272-.1933-.3369.2319L154.41,88.5248,83.5326,137.3314c-8.9023-6.9292-15.5078-12.0975-17.4517-13.62a8.2118,8.2118,0,0,1,2.2954-2.5366l87.5264-62.6387a8.2316,8.2316,0,0,1,9.5674-.0088l87.7227,62.5166a8.2257,8.2257,0,0,1,2.6469,3.1792C254.4222,125.2981,247.8334,130.2919,238.6967,137.1923Z" />
                        <path class="sapIllus_Layering2" style="fill:var(--sapIllus_Layering2)" d="M68.3383,196.2021a24.5594,24.5594,0,0,0-.6,3.6006c0,1.2.5,2,1.8994,2,3.6006,0,8.8008-4.6006,8.8008-15.4013,0-16.2012-11.1006-24.9014-26.501-24.9014s-27.7022,12.9014-27.7022,28.8018c0,17.8007,12.4,28.6015,28.6016,28.6015,15.001,0,18.1016-6.6,21.502-6.6a3.9528,3.9528,0,0,1,3.8,3.8994c0,5.4-15.2012,11.7012-25.3018,11.7012-21.6016,0-39.4024-15.6006-39.4024-37.6025C13.4349,168.7,30.8363,152.5,52.2377,152.5c19.1006,0,35.2021,11.9,35.2021,31.002,0,22.7011-19.3017,28.8017-25.3017,28.8017q-5.8506,0-6-5.1006h-.2a13.4712,13.4712,0,0,1-10.4,5.1006c-8.501,0-14.7012-7.7012-14.7012-17.6016,0-13.8007,9.1006-23.9013,19.001-23.9013,6.1006,0,9.501,2,12.4,6.2l.4-1.8c.7-3.1006,3-3.6006,4.8008-3.6006a4.1165,4.1165,0,0,1,4.3994,4.3008,14.5456,14.5456,0,0,1-.3994,2.8994Zm-18.7012,5.3008c5.7,0,9.7012-4.9,9.7012-11.3008,0-5.1005-2.7-8.6005-7.7012-8.6005-5.8,0-10,5.1005-10,11.0009C41.6371,198.3027,45.0375,201.5029,49.6371,201.5029Z" />
                        <path class="sapIllus_StrokeDetailColor" style="fill:var(--sapIllus_StrokeDetailColor)" d="M52.8373,228.4043c-22.7481,0-39.9024-16.3809-39.9024-38.1025C12.9349,168.8242,30.1986,152,52.2377,152c20.687,0,35.7021,13.248,35.7021,31.502,0,22.3574-18.9126,29.3017-25.8017,29.3017-4.5826,0-6.065-2.3262-6.4141-4.6142a13.61,13.61,0,0,1-10.1865,4.6142c-8.666,0-15.2012-7.7822-15.2012-18.1016,0-13.455,8.7481-24.4013,19.501-24.4013,5.5434,0,9.1435,1.6113,12.1523,5.5117l.16-.72c.5986-2.6494,2.3779-3.9922,5.289-3.9922a4.5926,4.5926,0,0,1,4.9,4.8008,15.1516,15.1516,0,0,1-.4107,3.0039l-3.1011,17.4052a22.28,22.28,0,0,0-.5878,3.4922c0,1.0655.4052,1.5,1.3994,1.5,3.4467,0,8.3007-4.623,8.3007-14.9013C77.9388,171.35,67.976,162,51.9379,162c-14.9995,0-27.2022,12.6963-27.2022,28.3018,0,16.8086,11.293,28.1015,28.1016,28.1015,10.0156,0,14.5947-2.95,17.625-4.9033,1.4712-.9473,2.6328-1.6963,3.8769-1.6963a4.4642,4.4642,0,0,1,4.3,4.3994C78.639,221.9775,63.26,228.4043,52.8373,228.4043ZM52.2377,153c-21.4781,0-38.3028,16.3848-38.3028,37.3018,0,21.1523,16.7246,37.1025,38.9024,37.1025,10.4306,0,24.8017-6.49,24.8017-11.2012a3.4387,3.4387,0,0,0-3.3-3.3994c-.95,0-1.95.6445-3.3354,1.5371-3.1284,2.0156-7.8569,5.0625-18.1665,5.0625-17.4068,0-29.1016-11.6953-29.1016-29.1015C23.7357,174.1445,36.3871,161,51.9379,161c16.6548,0,27.0009,9.7334,27.0009,25.4014,0,11.584-5.705,15.9013-9.3007,15.9013a2.2107,2.2107,0,0,1-2.3994-2.5,24.1368,24.1368,0,0,1,.6093-3.6982l3.0987-17.3916a14.6,14.6,0,0,0,.3916-2.8115,3.6225,3.6225,0,0,0-3.9-3.8008c-2.4477,0-3.8183,1.0205-4.3129,3.2109l-.649,2.916-.6508-.9423c-2.9727-4.3067-6.334-5.9844-11.9888-5.9844-10.2017,0-18.501,10.498-18.501,23.4013,0,9.7491,6.105,17.1016,14.2012,17.1016a12.869,12.869,0,0,0,10.021-4.9258l.1494-.1748h.9155l.0147.4854c.0908,3.1054,1.89,4.6152,5.5,4.6152,6.622,0,24.8017-6.707,24.8017-28.3017C86.94,165.8281,72.3456,153,52.2377,153Zm-2.6006,49.0029c-5.1636,0-8.5-3.6894-8.5-9.4,0-6.4492,4.6123-11.5009,10.5-11.5009,5.0586,0,8.2012,3.4873,8.2012,9.1005C59.8383,197.04,55.5482,202.0029,49.6371,202.0029Zm2-19.9013c-5.3272,0-9.5,4.6123-9.5,10.5009,0,5.1036,2.9438,8.4,7.5,8.4,5.3315,0,9.2012-4.542,9.2012-10.8008C58.8383,185.13,56.1464,182.1016,51.6371,182.1016Z" />
                        <path class="sapIllus_Layering1" style="fill:var(--sapIllus_Layering1)" d="M127.1881,21.5913a1.2161,1.2161,0,0,0-1.6672-.4183,1.2153,1.2153,0,0,0-.413,1.6638l10.5738,17.5713a1.1642,1.1642,0,0,0,.1321.1813,1.2124,1.2124,0,0,0,1.948-1.4272Z" />
                        <path class="sapIllus_Layering1" style="fill:var(--sapIllus_Layering1)" d="M163.7653,7a1.2586,1.2586,0,0,0-1.2387,1.2319l-.5914,21.4634a1.3089,1.3089,0,0,0,.3879.9665,1.1664,1.1664,0,0,0,.7824.3377l.0356,0a1.2378,1.2378,0,0,0,1.2031-1.2329l.59-21.463A1.2449,1.2449,0,0,0,163.7653,7Z" />
                        <path class="sapIllus_Layering1" style="fill:var(--sapIllus_Layering1)" d="M200.538,23.3206a1.1638,1.1638,0,0,0-.8642-.3184,1.1766,1.1766,0,0,0-.83.4062L185.2458,38.9322a1.265,1.265,0,0,0-.1431,1.4607l.001.0005a1.2829,1.2829,0,0,0,.2266.2877,1.174,1.174,0,0,0,1.693-.0878l13.5992-15.5244A1.26,1.26,0,0,0,200.538,23.3206Z" />
                        <path class="sapIllus_ObjectFillColor" style="fill:var(--sapIllus_ObjectFillColor)" d="M278.2066,200.7982a3.2452,3.2452,0,0,0,.1472-4.7278l-.1179-.118-5.2452-5.2452-2.6226,2.6226,3.8306,3.8307a1.8545,1.8545,0,0,1-.1029,2.718l-16.0489,13.7851a1.8475,1.8475,0,0,0-.07,2.68h0a1.8477,1.8477,0,0,0,2.5492.0607Z" />
                        <path class="sapIllus_StrokeDetailColor" style="fill:var(--sapIllus_StrokeDetailColor)" d="M259.2853,217.3867a2.3484,2.3484,0,0,1-1.5722-4.0947L273.77,199.5a1.3563,1.3563,0,0,0,.0752-1.9863l-4.1836-4.1836L272.99,190l5.7168,5.7168a3.7461,3.7461,0,0,1-.17,5.4561l-17.6807,15.6064A2.3308,2.3308,0,0,1,259.2853,217.3867Zm11.79-24.0566,3.4765,3.4765a2.3546,2.3546,0,0,1-.13,3.4512L258.3732,214.043a1.3462,1.3462,0,0,0-.0429,1.9463,1.3469,1.3469,0,0,0,1.8593.0449l17.6856-15.6113a2.7445,2.7445,0,0,0,.125-3.9991l-5.01-5.01Z" />
                        <path class="sapIllus_AccentColor" style="fill:var(--sapIllus_AccentColor)" d="M261.06,204.0018a18.8734,18.8734,0,0,1-5.7471-5.499l-1.1436-2.7383-7.9355,8.2285A147.597,147.597,0,0,0,231.615,221.68a34.39,34.39,0,0,1-3.4454,4.0341,2.3562,2.3562,0,0,0,.004,3.3252l1.623,1.6241a2.36,2.36,0,0,0,3.33,0,34.4573,34.4573,0,0,1,4.0664-3.4727,146.9584,146.9584,0,0,0,17.7012-14.6152l7.7587-7.4844Z" />
                        <path class="sapIllus_ObjectFillColor" style="fill:var(--sapIllus_ObjectFillColor)" d="M274.5829,184.262h0a6.0975,6.0975,0,0,0-8.719.0979l-11.788,12.2222.3755.6281a19.164,19.164,0,0,0,8.0081,7.3719h0l12.0255-11.601a6.0976,6.0976,0,0,0,.098-8.7191Z" />
                        <path class="sapIllus_StrokeDetailColor" style="fill:var(--sapIllus_StrokeDetailColor)" d="M262.5544,205.1854l-.3154-.1543a19.6264,19.6264,0,0,1-8.2168-7.5644l-.5713-.9571,12.0527-12.496a6.5485,6.5485,0,0,1,4.6934-2.0372,6.4371,6.4371,0,0,1,4.7392,1.9317h0a6.6,6.6,0,0,1-.1054,9.4346Zm-7.8535-8.5312.18.2988a18.6155,18.6155,0,0,0,7.4873,7.0234l11.77-11.3544a5.5987,5.5987,0,0,0-3.8652-9.6465c-.0215,0-.043,0-.0645.0009a5.55,5.55,0,0,0-3.9834,1.73Z" />
                        <path class="sapIllus_AccentColor" style="fill:var(--sapIllus_AccentColor)" d="M275.8942,178.3146h0a2.296,2.296,0,0,1,2.296,2.296v6.9763a0,0,0,0,1,0,0h-4.592a0,0,0,0,1,0,0v-6.9763A2.296,2.296,0,0,1,275.8942,178.3146Z" transform="translate(210.1732 -141.5016) rotate(45)" />
                        <path class="sapIllus_StrokeDetailColor" style="fill:var(--sapIllus_StrokeDetailColor)" d="M274.5954,188.2069c-.459,0-1.2246-.2676-2.39-1.4316-1.7891-1.7891-1.374-2.9473-1.3213-3.0733a.5.5,0,0,1,.9307.3662c-.0118.0489-.1495.753,1.0976,2,1.2051,1.2061,1.7031,1.1319,1.7041,1.1319a.46.46,0,0,1,.6436.2021.5327.5327,0,0,1-.2246.6983A.8706.8706,0,0,1,274.5954,188.2069Z" />
                        <path class="sapIllus_StrokeDetailColor" style="fill:var(--sapIllus_StrokeDetailColor)" d="M228.1736,229.0389a2.33,2.33,0,0,1-.5024-.7506l-2.6,4.11a1.01,1.01,0,0,0,1.3756,1.3756l4.1136-2.6023a2.3358,2.3358,0,0,1-.7639-.5083Z" />
                        </svg>

                        <figcaption class="fd-illustrated-message__figcaption">
                            <h3 class="fd-illustrated-message__title">No matching items found.</h3>
                            <p class="fd-illustrated-message__text">Check the filter settings.</p>
                        </figcaption>
                    </figure>
                    </div>
            </td>
        </tr>
    </tbody>
</table>

${localStyles}`;

emptyTable.storyName = 'Empty Table';
emptyTable.parameters = {
    docs: {
        storyDescription: 'empty table story description'
    }
};
