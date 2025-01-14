import bordersExampleHtml from "./borders.example.html?raw";
import valueStatesExampleHtml from "./value-states.example.html?raw";
import zoomIconExampleHtml from "./zoom-icon.example.html?raw";
import accentColorsShellHeaderContextExampleHtml from "./accent-colors-shell-header-context.example.html?raw";
import accentColorsExampleHtml from "./accent-colors.example.html?raw";
import tileIconBackgroundExampleHtml from "./tile-icon-background.example.html?raw";
import placeholderBackgroundExampleHtml from "./placeholder-background.example.html?raw";
import transparentExampleHtml from "./transparent.example.html?raw";
import backgroundImageExampleHtml from "./background-image.example.html?raw";
import circleExampleHtml from "./circle.example.html?raw";
import initialsExampleHtml from "./initials.example.html?raw";
import iconExampleHtml from "./icon.example.html?raw";
import '../../../src/avatar.scss';
import '../../../src/icon.scss';
export default {
  title: 'Components/Avatar',
  parameters: {
    description: `The avatar control is used for presenting various images, including user profiles, user initials, placeholder images, icons, or business-related images like product pictures.<br>
    For detailed information check Fiori Design Guidelines for <a target="_blank" href="https://experience.sap.com/fiori-design-web/avatar/">Avatar</a> component. 


## Usage
Use avatar to display:

- A user’s image or initials
- Standardized images for business-related content (such as products, company logos, ad campaign images etc.)
- Icons
- Images with a transparent background
- Placeholder images

Do not use avatar if:

- You want to display an image for any other use case. Instead, use the **Image** component.
- You want to display images in a carousel. Instead, use the **Carousel** component.
- You want to display an interactive icon. Instead, use the **Button** component with an icon inside.

## Sizes
The avatar control is adaptive and has five predefined sizes. These are the same for both compact and cozy.

| **Size** | **rem** | &nbsp;&nbsp; **Use for images in…** | **Modifier class** |
| :--------- | ----------: | :----------------------- | :--------------- |
| XS | 2 rem | &nbsp;&nbsp; Table list items, Card list items &nbsp;&nbsp;  | \`fd-avatar--xs\` |
| S | 3 rem | &nbsp;&nbsp; Card headers, Card list items &nbsp;&nbsp; | \`fd-avatar--s\` or <br/>\`fd-avatar--sm\` |
| M | 4 rem | &nbsp;&nbsp; App headers for small screen sizes &nbsp;&nbsp; | \`fd-avatar--m\` or <br/>\`fd-avatar--md\` |
| L | 5 rem | &nbsp;&nbsp; App headers for normal screen sizes &nbsp;&nbsp; | \`fd-avatar--l\` or <br/>\`fd-avatar--lg\` |
| XL | 7 rem | &nbsp;&nbsp; App headers for large screen sizes &nbsp;&nbsp; | \`fd-avatar--xl\` |

<br><br><br>
`,
    tags: []
  }
};
const localStyles = `
<style>

    .fd-avatar {
        margin: 0.5rem;
    }


</style>
`;

export const BackgroundImage = () => backgroundImageExampleHtml;
BackgroundImage.storyName = 'Image, Person';
BackgroundImage.parameters = {
  docs: {
    description: {
      story: `An avatar is a visual representation of an user or a product in the digital space. For representing a person, the circular shape is used. For representing a product or object, the square shape is used. <br/>
This type of Avatar requires the \`fd-avatar--thumbnail\` modifier class.
There are two options to set the background: Cover (default) and Contain.

- <b>Cover:</b> The size of the image is scaled up to completely cover the control area. As a result, parts of the image may be outside the shape.
- <b>Contain:</b> The image is scaled down to fit into the control area. The entire image is displayed, but might not fully fill the shape. In this case, the control displays a default background color. The image itself is always centered inside the shape.

Changing the default \`background-size: cover\` to \`background-size: contain\` CSS property can be achieved by adding \`fd-avatar--background-contain\` modifier class.`
    }
  }
};

export const Initials = () => initialsExampleHtml;
Initials.parameters = {
  docs: {
    description: {
      story: `The initials avatar can display up to <b style="color: red;">three</b> alphabetical characters representing the first and last name(s) of a person, for example: MvV for Marjolein van Veen. The order in which the first and last name(s) are displayed depends on the language-specific settings. If more than 3 initials are required to display longer names, then a gender-neutral person icon should be displayed instead. If the three letters does not fit in the shape (e.g. WWW), then the genderneutral person icon is used as a fallback.`
    }
  }
};

export const Icon = () => iconExampleHtml;
Icon.parameters = {
  docs: {
    description: {
      story: 'Placeholders are used when there is no other image available. Avatar and standardized images require placeholders. The default placeholder for an avatar is a gender-neutral person icon inside a circle. The default placeholder for a business image is a neutral product icon inside a square.'
    }
  }
};

export const Circle = () => circleExampleHtml;
Circle.parameters = {
  docs: {
    description: {
      story: ' The circular shape is used mainly to represent a person. For this type of Avatar use the `fd-avatar--circle` modifier class with the `fd-avatar` base class. Business images display a product, company, object, logo, or other business-related content. Always use a square (default) for business images.'
    }
  }
};

export const Transparent = () => transparentExampleHtml;
Transparent.parameters = {
  docs: {
    description: {
      story: 'A transparent style can be displayed by adding the `fd-avatar--transparent` modifier class to the `fd-avatar` base class. This can be useful for displaying descriptive illustrations and decorative pictures, for example.'
    }
  }
};
export const PlaceholderBackground = () => placeholderBackgroundExampleHtml;
PlaceholderBackground.parameters = {
  docs: {
    description: {
      story: 'An avatar with a placeholder background can be displayed by adding the `fd-avatar--placeholder` modifier class.'
    }
  }
};
export const TileIconBackground = () => tileIconBackgroundExampleHtml;
TileIconBackground.parameters = {
  docs: {
    description: {
      story: 'An avatar with a tile icon background can be displayed by adding the `fd-avatar--tile` modifier class.'
    }
  }
};
export const AccentColors = () => accentColorsExampleHtml;
AccentColors.storyName = 'Color variations';
AccentColors.parameters = {
  docs: {
    description: {
      story: 'The Avatar can have different background colors depending on the scenario. To change the accent background color, add the `fd-avatar--accent-color-*` class with the number indicating the desired color. The color options include numbers ranging from 1 to 10, for example: `fd-avatar--accent-color-10`.'
    }
  }
};
export const AccentColorsShellHeaderContext = () => accentColorsShellHeaderContextExampleHtml;
AccentColorsShellHeaderContext.storyName = 'Color variations in Shell header context';
AccentColorsShellHeaderContext.parameters = {
  docs: {
    description: {
      story: 'When used in Shell header context, an additional modifier class `fd-avatar--shell` should be added to the `fd-avatar` base class and the modifier class specifying the accent color `fd-avatar--accent-color-*`.'
    }
  }
};
export const ZoomIcon = () => zoomIconExampleHtml;
ZoomIcon.parameters = {
  docs: {
    description: {
      story: `If an avatar is clickable, you can show an optional badge and icon. 
            The badge indicates that the avatar is interactive and the icon indicates the action triggered by clicking the avatar. This feature gives users visual affordance of the available action, and is particularly useful for images.`
    }
  }
};
export const ValueStates = () => valueStatesExampleHtml;
ValueStates.parameters = {
  docs: {
    description: {
      story: `Value States can be added to the Avatar badge. <br>For <b>positive</b> value state use the \`.fd-avatar__zoom-icon--positive\` modifier class with the \`fd-avatar__zoom-icon\` base class. <br>For <b>caution</b> value state apply the \`.fd-avatar__zoom-icon--caution\` modifier class. <br>The <b>negative</b> value state can be achieved with \`.fd-avatar__zoom-icon--negative\` modifier class. <br><b>Information</b> value state would require adding \`.fd-avatar__zoom-icon--information\` to the \`fd-avatar__zoom-icon\` base class.`
    }
  }
};
export const Borders = () => bordersExampleHtml;
Borders.parameters = {
  docs: {
    description: {
      story: 'You can add a very subtle border to the avatar with the `fd-avatar--border` modifier class.'
    }
  }
};
export const Interactive = () => `${localStyles}
<h3>Regular State</h3>
<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--accent-color-1" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--accent-color-2" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--accent-color-3" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle fd-avatar--accent-color-4" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--accent-color-5" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-6 fd-avatar--xs" tabindex="0" role="button" aria-label="Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-7 fd-avatar--s" tabindex="0" role="button" aria-label="Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-8 fd-avatar--m" tabindex="0" role="button" aria-label="Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-9 fd-avatar--l" tabindex="0" role="button" aria-label="Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-10 fd-avatar--xl" tabindex="0" role="button" aria-label="Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--placeholder" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--tile" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--thumbnail" tabindex="0" role="button" style="background-image: url('/assets/images/portraits/L_80x80_M1.png')" role="img" aria-label="John Doe"></span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--transparent" tabindex="0" role="button" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--transparent fd-avatar--border" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--transparent fd-avatar--border" tabindex="0" role="button" aria-label="Wendy Wallace">WW
</span>

<br><br>
<h3>Hover State</h3>

<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--accent-color-1 is-hover" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--accent-color-2 is-hover" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--accent-color-3 is-hover" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle fd-avatar--accent-color-4 is-hover" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--accent-color-5 is-hover" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-6 fd-avatar--xs is-hover" tabindex="0" role="button" aria-label="Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-7 fd-avatar--s is-hover" tabindex="0" role="button" aria-label="Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-8 fd-avatar--m is-hover" tabindex="0" role="button" aria-label="Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-9 fd-avatar--l is-hover" tabindex="0" role="button" aria-label="Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-10 fd-avatar--xl is-hover" tabindex="0" role="button" aria-label="Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--placeholder is-hover" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--tile is-hover" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--thumbnail is-hover" tabindex="0" role="button" style="background-image: url('/assets/images/portraits/L_80x80_M1.png')" role="img" aria-label="John Doe"></span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--transparent is-hover" tabindex="0" role="button" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--transparent fd-avatar--border is-hover" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--transparent fd-avatar--border is-hover" tabindex="0" role="button" aria-label="Wendy Wallace">WW
</span>


<br><br>
<h3>Active/Toggled State</h3>

<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--accent-color-1 is-active" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--accent-color-2 is-active" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--accent-color-3 is-active" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle fd-avatar--accent-color-4 is-active" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--accent-color-5 is-active" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-6 fd-avatar--xs is-active" tabindex="0" role="button" aria-label="Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-7 fd-avatar--s is-active" tabindex="0" role="button" aria-label="Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-8 fd-avatar--m is-active" tabindex="0" role="button" aria-label="Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-9 fd-avatar--l is-active" tabindex="0" role="button" aria-label="Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-10 fd-avatar--xl is-active" tabindex="0" role="button" aria-label="Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--placeholder is-active" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--tile is-active" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--thumbnail is-active" tabindex="0" role="button" style="background-image: url('/assets/images/portraits/L_80x80_M1.png')" role="img" aria-label="John Doe"></span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--transparent is-active" tabindex="0" role="button" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--transparent fd-avatar--border is-active" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--transparent fd-avatar--border is-active" tabindex="0" role="button" aria-label="Wendy Wallace">WW
</span>

<br><br>
<h3>Toggled Hover State</h3>

<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--accent-color-1 is-toggled is-hover" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--accent-color-2 is-toggled is-hover" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--accent-color-3 is-toggled is-hover" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle fd-avatar--accent-color-4 is-toggled is-hover" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--accent-color-5 is-toggled is-hover" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-6 fd-avatar--xs is-toggled is-hover" tabindex="0" role="button" aria-label="Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-7 fd-avatar--s is-toggled is-hover" tabindex="0" role="button" aria-label="Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-8 fd-avatar--m is-toggled is-hover" tabindex="0" role="button" aria-label="Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-9 fd-avatar--l is-toggled is-hover" tabindex="0" role="button" aria-label="Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-10 fd-avatar--xl is-toggled is-hover" tabindex="0" role="button" aria-label="Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--placeholder is-toggled is-hover" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--tile is-toggled is-hover" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--thumbnail is-toggled is-hover" tabindex="0" role="button" style="background-image: url('/assets/images/portraits/L_80x80_M1.png')" role="img" aria-label="John Doe"></span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--transparent is-toggled is-hover"  tabindex="0" role="button"aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--transparent fd-avatar--border is-toggled is-hover"  tabindex="0" role="button"aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--transparent fd-avatar--border is-toggled is-hover" tabindex="0" role="button" aria-label="Wendy Wallace">WW
</span>

<br><br>
<h3>Disabled State</h3>

<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--accent-color-1 is-disabled" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--accent-color-2 is-disabled" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--accent-color-3 is-disabled" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle fd-avatar--accent-color-4 is-disabled" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--accent-color-5 is-disabled" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-6 fd-avatar--xs is-disabled" role="button" aria-label="Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-7 fd-avatar--s is-disabled" role="button" aria-label="Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-8 fd-avatar--m is-disabled" role="button" aria-label="Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-9 fd-avatar--l is-disabled" role="button" aria-label="Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-10 fd-avatar--xl is-disabled" role="button" aria-label="Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--placeholder is-disabled" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--tile is-disabled" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--thumbnail is-disabled" role="button" style="background-image: url('/assets/images/portraits/L_80x80_M1.png')" role="img" aria-label="John Doe"></span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--transparent is-disabled" role="button" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--transparent fd-avatar--border is-disabled"  role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--transparent fd-avatar--border is-disabled" role="button" aria-label="Wendy Wallace">WW
</span>


<br><br>
<h3>Focus State</h3>

<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--accent-color-1 is-focus" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--accent-color-2 is-focus" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--accent-color-3 is-focus" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle fd-avatar--accent-color-4 is-focus" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--accent-color-5 is-focus" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-6 fd-avatar--xs is-focus" tabindex="0" role="button" aria-label="Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-7 fd-avatar--s is-focus" tabindex="0" role="button" aria-label="Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-8 fd-avatar--m is-focus" tabindex="0" role="button" aria-label="Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-9 fd-avatar--l is-focus" tabindex="0" role="button" aria-label="Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-10 fd-avatar--xl is-focus" tabindex="0" role="button" aria-label="Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--placeholder is-focus" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--tile is-focus" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--thumbnail is-focus" tabindex="0" role="button" style="background-image: url('/assets/images/portraits/L_80x80_M1.png')" role="img" aria-label="John Doe"></span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--transparent is-focus" tabindex="0" role="button" aria-label="Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--transparent fd-avatar--border is-focus" tabindex="0" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--transparent fd-avatar--border is-focus" tabindex="0" role="button" aria-label="Wendy Wallace">WW
</span>
`;
Interactive.parameters = {
  docs: {
    description: {
      story: ``
    }
  }
};