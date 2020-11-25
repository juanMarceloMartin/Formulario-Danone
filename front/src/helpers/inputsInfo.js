const inputsInfo = () => {
  const territories = [{
      value: "territorio 1",
      label: "territorio 1"
    },
    {
      value: "territorio 2",
      label: "territorio 2"
    },
    {
      value: "territorio 3",
      label: "territorio 3"
    },
  ];

  const activities = [{
      value: "actividad 1",
      label: "actividad 1"
    },
    {
      value: "actividad 2",
      label: "actividad 2"
    },
    {
      value: "actividad 3",
      label: "actividad 3"
    },
  ];

  return [{
      dataProperty: "name",
      type: "text",
      labelText: "Nombre"
    },
    {
      dataProperty: "lastname",
      type: "text",
      labelText: "Apellido"
    },
    {
      dataProperty: "mail",
      type: "email",
      labelText: "E-mail"
    },
    {
      dataProperty: "phone",
      type: "text",
      labelText: "Teléfono"
    },
    {
      dataProperty: "businessName",
      type: "text",
      labelText: "Razón Social"
    },
    {
      dataProperty: "cuit",
      type: "text",
      labelText: "CUIT",
      sendData: true,
    },
    {
      dataProperty: "dni",
      type: "text",
      labelText: "DNI"
    },
    {
      dataProperty: "activity",
      type: "text",
      labelText: "Actividad",
      options: activities,
      sendData: true,
    },
    {
      dataProperty: "google",
      type: "google",
      labelText: "google"
    },
    {
      dataProperty: "street",
      type: "text",
      labelText: "Calle"
    },
    {
      dataProperty: "streetNumber",
      type: "text",
      labelText: "Altura"
    },
    {
      dataProperty: "city",
      type: "text",
      labelText: "Localidad"
    },
    {
      dataProperty: "state",
      type: "text",
      labelText: "Provincia"
    },
    {
      dataProperty: "zipCode",
      type: "text",
      labelText: "C. P."
    },
    {
      dataProperty: "territory",
      type: "text",
      labelText: "Territorio",
      options: territories,
      sendData: true,
    },
    {
      dataProperty: "cuitPhoto",
      type: "file",
      labelText: "Foto CUIT"
    },
    {
      dataProperty: "dniPhoto",
      type: "file",
      labelText: "Foto DNI"
    },
    {
      dataProperty: "applicationLetterPhoto",
      type: "file",
      labelText: "Carta de Solicitud Firmada",
    },
    {
      dataProperty: "taxPhoto",
      type: "file",
      labelText: "Ingresos Brutos"
    },
    {
      dataProperty: "shopPhoto",
      type: "file",
      labelText: "Foto Fachada Local"
    },
    {
      dataProperty: "fridgePic",
      type: "file",
      labelText: "Foto Heladeras"
    },
    {
      dataProperty: "openingTime",
      type: "time",
      labelText: "Horario Apertura Local",
    },
  ];
};

export default inputsInfo;