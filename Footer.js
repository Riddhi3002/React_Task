// import "./footer.css"
function Footer() {
const currentYear = new Date().getFullYear();
return(
<div className="footer">
    <h2>CopyrightⒸ{currentYear} </h2>
</div>
);
}

export default Footer;

