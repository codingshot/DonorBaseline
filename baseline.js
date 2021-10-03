import { IpfsClient, Ident, NChain } from 'provide-js';
import { from } from 'rxjs';
import { first } from 'rxjs/operators';
import { Buffer } from 'buffer';
// import { Ident } from 'provide-js';

const token = 'myapitoken';
const dappId = 'mydappid';
const networkId = 'mynetworkid';
const NChain = new NChain(token);
const params = {
  application_id: dappId,
  network_id: networkId,
};
NChain.fetchConnectors(params).then(
  (response) => {
    console.log(response.requestBody);
    console.log(response.requestHeaders);
    console.log(response.responseBody);
    console.log(response.responseHeaders);
    console.log(response.xhr);
    const connectorList = JSON.parse(response.responseBody);
    console.log(connectorList);
  }
).catch(
  (response) => {
    console.log('Error!');
    console.log(response.xhr);
  }
);


// const token = 'myapitoken';
const methodParams = ["1stparamvalue","2ndparamvalue"];
const executionParams = {
    method: 'methodname',
    params: methodParams,
    value: 0,
    wallet_id: 'mywalletid',
};
const contractId = 'mycontractid';
const NChain = new NChain(token);

NChain.executeContract(contractId, executionParams).then(
  (response) => {
    console.log(response.requestBody);
    console.log(response.requestHeaders);
    console.log(response.responseBody);
    console.log(response.responseHeaders);
    console.log(response.xhr);
  }
).catch(
  (response) => {
    console.log('Error!');
    console.log(response.xhr);
  }
);

// const NChain = new NChain(token);
const params = {
  application_id: dappId,
  network_id: networkId,
};
const observable = from(NChain.fetchConnectors(params));

observable.pipe(first()).subscribe(
  (response) => {
    console.log(response.requestBody);
    console.log(response.requestHeaders);
    console.log(response.responseBody);
    console.log(response.responseHeaders);
    console.log(response.xhr);
    const connectorList = JSON.parse(response.responseBody);
    console.log(connectorList);
  },
  (response) => {
    console.log('Error!');
    console.log(response.xhr);
  }
);

const methodParams = ["1stparamvalue","2ndparamvalue"];
const executionParams = {
    method: 'methodname',
    params: methodParams,
    value: 0,
    wallet_id: 'mywalletid',
};
const contractId = 'mycontractid';
const NChain = new NChain(token);
const observable = from(NChain.executeContract(contractId, executionParams));

observable.pipe(first()).subscribe(
  (response) => {
    console.log(response.requestBody);
    console.log(response.requestHeaders);
    console.log(response.responseBody);
    console.log(response.responseHeaders);
    console.log(response.xhr);
  },
  (response) => {
    console.log('Error!');
    console.log(response.xhr);
  }
);

const ident = new Ident(token);

ident.fetchApplicationDetails(dappId).then(
  (response) => {
    console.log(response.requestBody);
    console.log(response.requestHeaders);
    console.log(response.responseBody);
    console.log(response.responseHeaders);
    console.log(response.xhr);
    const dappDetails = JSON.parse(response.responseBody);
    console.log(dappDetails);
  }
).catch(
  (response) => {
    console.log('Error!');
    console.log(response.xhr);
  }
);


const ipfs = new IpfsClient();// default no parameters for ipfs provide node
// This event would come from an <input type='file'/> change event.
const file = event.target.files[0];
// Create a stream from the file, so big files may upload without allocating memory twice
const content = fileReaderPullStream(file);
const path = file.name;
let uploadProgress = '';
const options = {
  progress: (progress) => uploadProgress = `received: ${progress}`,
  wrapWithDirectory: true,
};

ipfs.add(path, content, options).then(
  (hash) => console.log(hash)
).catch(
  (error) => console.log(error)
);
// You may then download the file using your ipfs gateway url and hash,
// e.g. http://localhost:8080/ipfs/hashIgotFromCreatingAfile
