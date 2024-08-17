export default function Footer() {
  return (
    <section class="section contact-section container" id="contact-section">
      <div class="contact-title">
        <h3>CONTATO</h3>
        <h4 class="contact-text">Entre em contato comigo! 👇</h4>
      </div>
      <div class="contact-icons">
        <div class="icon-container">
          <ion-icon
            name="map-outline"
            class="logo contact-icons-color"
          ></ion-icon>
          <div class="icon-text">
            <span class="contact-icon-text">Localização</span>
            <span>Joinville, Santa Catarina, Brasil</span>
          </div>
        </div>
        <div class="icon-container">
          <ion-icon
            name="mail-outline"
            class="logo contact-icons-color"
          ></ion-icon>
          <div class="icon-text">
            <span class="contact-icon-text">Email</span>
            <span>ikerpires407@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}
