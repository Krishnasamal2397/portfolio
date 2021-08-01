export function reDirect(props) {
  switch (props) {
    case "git":
      return (window.location.href = "https://github.com/krishnasamal23");
    case "linkdn":
      return (window.location.href =
        "https://www.linkedin.com/in/krishna-prasad-samal-035a8b168/");
    case "insta":
      return (window.location.href =
        "https://www.instagram.com/krishna_prasad_samal/");
    default:
      return null;
  }
}
