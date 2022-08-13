import xxtea from "xxtea-node";

const key = "32l*!i1^l56e%$xnm1j9i@#$cr&";
const encrypt = (obj) => {
  try {
    const encryption = xxtea.encrypt(
      xxtea.toBytes(JSON.stringify(obj)),
      xxtea.toBytes(key)
    );
    const output = new Uint8Array(8 + encryption.length);
    const buf = new ArrayBuffer(4);
    new DataView(buf).setUint32(0, encryption.length, !1);
    const bufAsUint = new Uint8Array(buf);
    output.set([0, 4, 1, 1], 0);
    output.set(bufAsUint, 4);
    output.set(encryption, 8);
    return output;
  } catch (e) {
    throw new Error(e);
  }
};

export default encrypt;
