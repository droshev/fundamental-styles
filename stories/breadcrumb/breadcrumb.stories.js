export default {
    title: 'Components/Breadcrumb',
    parameters: {
        description: `
The breadcrumb component is a type of navigation that indicates the position of a page within the application’s page hierarchy. Users can navigate backward by selecting the previous pages in the navigation path.

##Usage
**Use breadcrumb if:**

- You want to show secondary navigation on the object page
- You want to show navigation in a table
- You want to show navigation in charts
- Use a breadcrumb only when the drilldown scenario leads to related object pages: parent object page / child object page 1 / child object page 2 / child object page 3.

**Do not use breadcrumb if:**

- Your hierarchy contains only one level.

**Do not include these elements in your breadcrumb path:**

- Other floorplans, such as overview pages and list reports
- Cross-application navigation to other object pages
- Independent object pages, such as fact sheets
`,
        tags: ['f3', 'a11y', 'theme'],
        components: ['popover', 'menu', 'breadcrumb', 'icon', 'link', 'dialog', 'list', 'bar', 'button']
    }
};

export const Standard = () => `<nav aria-label="products breadcrumbs">
    <ul class="fd-breadcrumb">
        <li class="fd-breadcrumb__item"><a class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Products</span></a></li>
        <li class="fd-breadcrumb__item"><a class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Suppliers</span></a></li>
        <li class="fd-breadcrumb__item"><a class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Titanium</span></a></li>
        <li class="fd-breadcrumb__item"><a class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Ultra Portable</span></a></li>
        <li class="fd-breadcrumb__item"><a class="fd-link" tabindex="0" href="#"><span class="fd-link__content">12 inch</span></a></li>
        <li class="fd-breadcrumb__item"><a class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Super portable deluxe</span></a></li>
        <li aria-current="page" class="fd-breadcrumb__item">Laptop</li>
    </ul>
</nav>
`;

Standard.parameters = {
    docs: {
        description: {
            story: 'The standard breadcrumb component displays several pages in text format separated by dividers, indicating a navigation path. Each page can be specifically selected to navigate to its corresponding page. It can be displayed by using the `fd-breadcrumb` class.'
        }
    }
};

export const Overflow = () => `
<nav aria-label="overflowing product breadcrumbs">
    <ul class="fd-breadcrumb">
        <li class="fd-breadcrumb__item">
            <div class="fd-popover">
                <div class="fd-popover__control">
                    <div
                        aria-controls="breadcrumb1"
                        aria-expanded="true"
                        aria-haspopup="true"
                        aria-label="Show collapsed breadcrumbs"
                        class="fd-link"
                        onclick="onPopoverClick('breadcrumb1');"
                        onkeypress="isSpaceOrEnter(event, onPopoverClick('breadcrumb1'));"
                        role="button"
                        tabindex="0">
                        <span class="fd-link__content">...</span>
                        <i role="presentation" class="sap-icon sap-icon--slim-arrow-down"></i>
                    </div>
                </div>
                <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false" id="breadcrumb1">
                    <div class="fd-popover__wrapper">
                        <div class="fd-menu fd-menu--compact">
                            <ul class="fd-menu__list" role="menu">
                                <li class="fd-menu__item" role="presentation">
                                    <a class="fd-menu__link" href="#" role="menuitem">
                                        <span class="fd-menu__title">Products</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item" role="presentation">
                                    <a class="fd-menu__link" href="#" role="menuitem">
                                        <span class="fd-menu__title">Suppliers</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item" role="presentation">
                                    <a class="fd-menu__link" href="#" role="menuitem">
                                        <span class="fd-menu__title">Titanium</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li class="fd-breadcrumb__item"><a class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Ultra Portable</span></a></li>
        <li class="fd-breadcrumb__item"><a class="fd-link" tabindex="0" href="#"><span class="fd-link__content">12 inch</span></a></li>
        <li class="fd-breadcrumb__item"><a class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Super portable deluxe</span></a></li>
        <li aria-current="page" class="fd-breadcrumb__item">Laptop</li>
    </ul>
</nav>
<div style="height: 150px"></div>
`;

Overflow.parameters = {
    docs: {
        iframeHeight: 200,
        description: {
            story: 'The overflow breadcrumb component displays a dropdown menu, followed by several pages in the navigation path. <br>Like the standard breadcrumb, each page can be selected to navigate to its corresponding page. This type is responsive and will collapse into a dropdown menu if there is insufficient horizontal space on the screen. <br>To display the overflow breadcrumb, include the `fd-popover` component in the first breadcrumb item within the element.'
        }
    }
};

export const Mobile = () => `
<div class="fd-dialog fd-dialog-docs-static fd-dialog--active" id="breadcrumb-dialog-example" style="max-width: 320px;">
    <div class="fd-dialog__content fd-dialog__content--mobile">
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
            <ul aria-labelledby="mobileHeader" class="fd-list fd-list--dropdown fd-list--compact fd-list--mobile" role="listbox">
                <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                    <span class="fd-list__title">Laptop</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item">
                    <span class="fd-list__title">Super portable deluxe</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item">
                    <span class="fd-list__title">12 inch</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item">
                    <span class="fd-list__title">Ultra portable</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item">
                    <span class="fd-list__title">Titanium</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item">
                    <span class="fd-list__title">Suppliers</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item">
                    <span class="fd-list__title">Products</span>
                </li>
            </ul>
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--transparent fd-button--compact">Cancel</button>
                </div>
            </div>
        </footer>
    </div>
</div>
`;

Mobile.parameters = {
    docs: {
        iframeHeight: 200,
        description: {
            story: 'A full-screen dialog should be used on mobile phones when the user taps the overflow ellipses button.'
        }
    }
};
