import FooterLink from "./FooterLink"

function Footer() {
    return (
        <div className="footer">
            <ul className="menu1">

                <FooterLink title={'about '} url='' />
                <FooterLink title={'privary'} url='' />
                <FooterLink title={'contact'} url='' />
                <FooterLink title={'home'} url='' />


            </ul>
            <ul className="menu2">

            </ul>
        </div>
    )
}

export default Footer