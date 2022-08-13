import xxtea from "xxtea-node";

// new Uint8Array(data.match(/../g).map((h) => parseInt(h, 16))).buffer
const key = "32l*!i1^l56e%$xnm1j9i@#$cr&";
const decrypt = (buf) => {
  // eslint-disable-next-line no-undef
  const buffer = Buffer.from(buf);
  try {
    const slice = buffer.slice(8);
    const str = xxtea.toString(xxtea.decrypt(slice, xxtea.toBytes(key)));
    const obj = JSON.parse(str);
    return obj;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export default decrypt;
