export default function getSections() {
  return {
    sections: [
      {
        personalData: [
          {
            title: 'Datos Personales',
            name: 'Marc',
            surname: 'Obiols Soler',
            email: 'marc.obiols.s@gmail.com',
            tel: '659 94 96 91',
            linkedinURL: 'https://www.linkedin.com/in/marc-obiols-a533b396/',
            facebookURL: 'https://www.facebook.com/marc.obiols.5',
          },
        ],
      },
      {
        studies: [
          {
            title: 'Grado Medio de imagen y sonido',
            date: '2005',
            school: 'ITES CIAPE (Barcelona)',
            adress: 'Calle Bailen num. 83',
            description: 'Conocimientos en fotografia anlógica y digital, conocimientos de todo el proceso analógico...',
            image: 'ites',
          },
          {
            title: 'Grado Superior Realización Audiovisual con adaptación curricular a la Multimedia',
            date: '2008',
            school: 'Sant Ignazi Sarrià (Barcelona)',
            adress: 'Castillo de Howards',
            descripton: 'Primeros pasos en programción y maquetación (HTML, CSS, AS2, Visual Basic), aprendizaje en modelaje y animacón 3D realizando un proyecto final de grado con un corto de 4 minutos.',
            image: 'sarria',
          },
          {
            title: 'Grado en Multimedia',
            date: '2014',
            school: 'UPC - CITM (Terrassa)',
            adress: 'Salmeron',
            descripton: 'etc',
            image: 'citm',
          },
        ],
      },
      {
        jobs: [
          {
            date: '2009',
            duration: '8 meses',
            name: 'LINKA',
            position: 'Maquetador Junior',
            tecnology: 'HTML, CSS, AS2',
            description: 'Maquetación de en AS2 de libros digitales interactivos, maquetación en HTML de webs importantes como Pronovias.',
          },
          {
            date: '2012',
            duration: '8 meses',
            name: 'AviPC (Start up)',
            position: 'CEO',
            tecnology: 'HTML, CSS, PHP, Prestashop',
            description: 'Gestión de e-Comerce',
          },
          {
            date: '2012~2015',
            duration: 'más de 2 años',
            name: 'ClientArea (Start up)',
            position: 'Junior Fullstack Developer y responsable de UX',
            tecnology: 'HTML, CSS, PHP, jQuery, AWS',
            description: 'Maquetación de en AS2 de libros digitales interactivos, maquetación en HTML de webs importantes como Pronovias.',
          },
          {
            date: '2014',
            duration: '6 meses',
            name: 'Brain Up Grup (Autonomo)',
            position: 'Front End Developer',
            tecnology: 'HTML, CSS, PHP, jQuery, GoogleMaps API',
            description: 'Creación de un proyecto para una web de alterne, creado des de cero sin librerias, conexión a la API de Google Maps para la geolocalización de los usuarios y creación de una Admin Zone para el cliente.',
          },
          {
            date: '2015',
            duration: '2 meses',
            name: 'Behimba',
            position: 'Back End Developer',
            tecnology: 'HTML, CSS, PHP',
            description: 'Remate final para un proyecto de traspaso de .NET a PHP',
          },
          {
            date: '2015',
            duration: '1 meses',
            name: 'By MOTTO',
            position: 'Back End Developer',
            tecnology: 'HTML, CSS, PHP, CodeIgniter, Grocery Crud',
            description: 'Contratado para hacer una web de viajes.',
          },
          {
            date: '2016~2017',
            duration: '1 año y 3 meses',
            name: 'DDB Tandem',
            position: 'Creative Coder',
            tecnology: 'HTML, CSS, PHP, CQ5(AEM Adobe)',
            description: 'Gestión de las dos webs de principales de Volkswagen (turismos y comerciales). Traspaso de CQ4 a CQ5.',
          },
          {
            date: '2017',
            duration: '9 meses',
            name: 'Ogilvy Barcelona',
            position: 'Creative Coder',
            tecnology: 'HTML, CSS, PHP, CQ5(AEM Adobe - VW), CQ4(AEM Adobe - SEAT)',
            description: 'Gestión de la web de Volkswagen Comerciales, gestión de tres Apps de Seat con CQ4.',
          },
        ],
      },
      {
        aficiones: [
          {
            name: 'Snowboard',
            description: 'Practico el sky desde los tres años, y a los 16 me pasé al snowboard.',
          },
          {
            name: 'Motociclismo',
            description: 'Tengo moto desde los 24 años (125 cc) y en marzo del 2017 me la cambié por una 700 cc, con ella hacemos excursiones con mi pareja.',
          },
        ],
      },
    ],
  };
}
