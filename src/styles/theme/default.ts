import { font } from "./fonts";
import { spacing } from "./spacing";

const light = {
  title: "light",
  colors: {
    background: "#E7E8FF",
    title: "#1F0322",
    text: "#1F0322",
    background_item: "#F9F9F9",
    border_color: "#1F0322",
    button_text: "#F9F9F9",
    button_Background: "#7d80da",
  },
  spacing: {
    sm: spacing.small,
    md: spacing.regular,
    lg: spacing.large,
    xlg: spacing.xLarge,
    xxlg: spacing.xxLarge,
  },
  borderRadius: "24px",
  notification: {
    alert: "#dc3545",
    warning: "#ffc107",
    success: "#28a745",
  },
  transition: {
    veryShort: "500ms",
    short: "0.3s",
  },
  typography: {
    label: {
      small: {
        weight: font.style.medium,
        lineheight: font.lineheight.default,
        letterspace: font.letterspace.large,
        fontSize: font.size["scale-1"],
      },
      regular: {
        weight: font.style.medium,
        lineheight: font.lineheight.default,
        letterspace: font.letterspace.large,
        fontSize: font.size["scale-2"],
      },
      large: {
        weight: font.style.medium,
        lineheight: font.lineheight.default,
        letterspace: font.letterspace.large,
        fontSize: font.size["scale-3"],
      },
    },
  },
};

export default light;
