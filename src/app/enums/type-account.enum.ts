export enum TypeAccountEnum {
  CuentaVista = 'Cuenta Vista',
  CuentaCorriente = 'Cuenta Corriente',
  CuentaAhorro = 'Cuenta Ahorro',
  CuentaRut = 'Cuenta Rut',
}

const typeAccountValueArray = Object.values(TypeAccountEnum); //[ 'WHITE', 'BLACK', 'BLUE', 0, 1, 3 ]
