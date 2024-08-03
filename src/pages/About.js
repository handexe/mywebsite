import React from "react";
import { Container, Row, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Pages.css";
function About() {
  const birthYear = 2003;
  const currentYear = new Date().getFullYear(); // Güncel yılı alın
  const age = currentYear - birthYear;
  return (
    <Container id="about">
      <Row>
        <Card id="about-card">
          <Card.Body>
            <Card.Title>Ben Kimim?</Card.Title>
            <Card.Text>
              Ben {age} yaşında bir Bilgisayar Programcısıyım. Tekirdağ Namık
              Kemal Üniversitesi&apos;nden mezun oldum. Ayrıca, lisans eğitimi için
              hazırlık yapıyorum ve Yönetim Bilişim Sistemleri bölümünde öğrenim
              görmeyi hedefliyorum. Bu bölümde başarılı olacağıma inanıyorum.
              <br/>
              <br/>
              Yazılım alanında, özellikle frontend ve mobil geliştirme konuları
              eğitim sürecim boyunca dikkatimi çekti. Öncelikli olarak frontend
              geliştirmeye odaklanarak React öğrenmeye başladım ve hala bu
              alanda kendimi geliştirmekteyim.
              <br />
              <br />
              Gelecekte, yazılım geliştirme alanında uzmanlaşarak büyük
              projelerde yer almayı ve yenilikçi çözümler üretmeyi hedefliyorum.
              Yönetim Bilişim Sistemleri alanındaki eğitimimle iş dünyasında
              stratejik kararlar alabilen bir profesyonel olmayı planlıyorum.
              Eğitim sürecimde, farklı projede yer aldım ve bu projeler
              aracılığıyla problem çözme ve ekip çalışması gibi becerilerimi
              geliştirdim. Ayrıca, React gibi modern teknolojileri kullanarak
              çeşitli uygulamalar geliştirmeyi hedefliyorum. Öğrenmeye olan
              hırsım ve yeniliklere açık olmam, bana bu yolda yardımcı olan en
              büyük motivasyon kaynaklarım. Çalışmalarımda dürüstlük, sorumluluk
              ve mükemmeliyet gibi değerlere önem veriyorum.
              <br />
            </Card.Text>
            <Card.Text>
              <ListGroup>
                <ListGroup.Item as="h5">Hobilerim</ListGroup.Item>
                <ListGroup.Item>Müzik Dinlemek</ListGroup.Item>
                <ListGroup.Item>Yürüyüş Yapmak</ListGroup.Item>
                <ListGroup.Item>Güncel Haberleri Takip Etmek</ListGroup.Item>
              </ListGroup>
            </Card.Text>
            <Card.Footer>
              Bana ulaşmak isterseniz{" "}
              <Link className="link-body-emphasis link-offset-3 link-underline-opacity-50 link-underline-opacity-100-hover">
                bu sayfa aracılığıyla
              </Link>{" "}
              bana eposta ile iletişime geçebilirsiniz
            </Card.Footer>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default About;
