export default `
  mutation {
    group1: CreateGroup(id: "a9a125e0-909d-4674-88c6-4fb74ff0ca6e", school: "Biologia", name: "Grupo de Biotecnología Vegetal", initials:"BIOPLASMA") {
      id
      name
      initials
    }
    group2: CreateGroup(id: "9f1ca7df-1d8f-4a9a-8ca5-ccedf5d6d040", school: "Biologia", name: "Grupo Manejo Integrado de Ecosistemas y Biodiversidad", initials:"XIUA") {
      id
      name
      initials
    }
    group3: CreateGroup(id: "6a08af41-c35b-4dc0-adae-04b2cd89127f", school: "Quimica", name: "QUIMICA-FISICA MOLECULAR Y MODELAMIENTO COMPUTACIONAL", initials:"QUIMOL") {
      id
      name
      initials
    }
    group4: CreateGroup(id: "1c448f24-2bbf-47a7-8fdd-91f76ed0dabd", school: "Ingenieria Agronomica", name: "Grupo de Investigaciones Agrícolas", initials:"GIA") {
      id
      name
      initials
    }
    
    group5: CreateGroup(id: "b58fb940-64e3-4a65-bc2c-02383b1decd9", school: "Administracion de Empresas", name: "Investigadores para el Desarrollo Empresarial y Agroindustrial Sostenible", initials:"IDEAS") {
      id
      name
       initials
    }
     group6: CreateGroup(id: "f67cd498-163a-49cc-9147-ee76f9dfb219", school: "Derecho", name: "Cuerpo Investigativo de Técnica Jurídica", initials:"CITEC" ) {
      id
      name
       initials
    }
     group7: CreateGroup(id: "533377e6-6fc5-4e2b-8c91-ea483f09f5b3", school: "Ingenieria de Sistemas y Computacion", name: "Grupo de Investigación en Software", initials:"GIS") {
      id
      name
       initials
    }
       group8: CreateGroup(id: "c607d3d4-07dc-4568-aa3b-47fb54ae22dc", school: "Ingenieria de Sistemas y Computacion", name: "Grupo de Investigación en Manejo de Información", initials:"GIMI") {
      id
      name
       initials
    }
       group9: CreateGroup(id: "465549ba-1395-482f-86c2-2cd32a2269b4", school: "Ingenieria de Sistemas y Computacion", name: "Grupo de Investigación en Telemática y TIC aplicada a la Educación", initials:"TelemaTICs") {
      id
      name
    }
     group10: CreateGroup(id: "7c7cfa05-af93-4020-9acc-fdc286a9b5c9", school: "Ingenieria Electronica", name: "Ingeniería Electrónica", initials:"I2E") {
      id
      name
      initials
    }
  }
  
`;
