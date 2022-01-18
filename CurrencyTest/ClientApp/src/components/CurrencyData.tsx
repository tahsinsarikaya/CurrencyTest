import * as React from 'react';
import { useState } from 'react';
import { Button } from 'reactstrap';
import { ICubeDetailModel, ICubeModel } from '../models/CurrencyModels';
import { currencyApiService } from '../services';

const CurrencyData: React.FunctionComponent = (props: any) => {
  const [currencies, setCurrencies] = useState<null | ICubeModel>();

  const getCurrencies = async () => {
    const data = await currencyApiService.getAll();
    console.log(data);
    setCurrencies(data);
  };

  return (
    <React.Fragment>
      <div style={{textAlign: "center"}}>
        <h1 id="tabelLabel">Currency</h1>
        <p>This component created for test case</p>
        <Button onClick={() => getCurrencies()}>Load Data</Button>
        <table className='table table-striped' aria-labelledby="tabelLabel">
          <thead title={currencies ? currencies.time : ""}>
            <tr>
              <th>Currency</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {currencies && currencies.cubes && currencies.cubes.map((currency: ICubeDetailModel) =>
              <tr>
                <td>{currency.currency}</td>
                <td>{currency.rate}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  )
}


export default CurrencyData as any; 
