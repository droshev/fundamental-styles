import dataTNT from './dataTNT.json';

export default {
    title: 'Components/Icons/TNT Icons',
    parameters: {
        description: `Icons are used to provide visual clarity, save screen space, and help guide users as they navigate an application. They are often used as visual elements within other components, although they can be used independently, given that they can be read by screen readers or have a tooltip for accessibility purposes. See [Getting Started](../getting-started.html#project-configuration) for instructions on how to use the SAP icon font on your page.

##Usage
**Use the icon if:**

- You want to display an icon for illustrative purposes only, without interaction states, acting as a non-interactive icon/pictogram. 
- You intend to pair the icon with another method of communication i.e. with text or a tooltip.


Note: If an icon needs to be selected or have any interaction states, it is recommended to use the transparent button style. See **Button** for more details on how to implement it.
          `,
        tags: ['development'],
        components: ['button', 'button-split', 'icon', 'menu', 'popover', 'segmented-button']
    }
};

export const sizes = () => `

    <span class="sap-icon-TNT sap-icon-TNT--exceptions"></span>
    <br />
    <span class="sap-icon-TNT sap-icon-TNT--exceptions" style="font-size:2rem"></span>
    <br />
    <span class="sap-icon-TNT sap-icon-TNT--exceptions" style="font-size:5rem"></span>
`;

sizes.parameters = {
    docs: {
        iframeHeight: 250,
        storyDescription: 'Icons don’t have predefined sizes because they align with the font size value. They are vector graphics, meaning they can be easily resized without compromising their appearance. And because icons are essentially a font, there are unlimited sizes.'
    }
};

export const tntIcons = () => {
    const div = document.createElement('div');
    div.className = 'fddocs-container';
    div.innerHTML = dataTNT.tntIcons.map((icon) => {
        return (
            '<div class="fddocs-container--icon">' +
                `<span class="sap-icon-TNT sap-icon-TNT--${icon}" style="font-size:3rem"></span>` +
                `<div>.sap-icon-TNT--${icon}</div>` +
            '</div><br />'
        );
    }).join('');
    return div.outerHTML;
};

tntIcons.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'For icons of <b>SAP-icons-TNT</b> font-family add the <code>sap-icon-TNT--{icon-name}</code> modifier class identifying the icon style to the <code>sap-icon-TNT</code> class. For example, for an <i>exceptions</i> icon, add <code>sap-icon-TNT sap-icon-TNT--exceptions</code> with the desired font size value.'
    },
    skipRTLSnapshot: true
};