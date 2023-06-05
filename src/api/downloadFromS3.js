import { Storage } from "@aws-amplify/storage"
  
  // Stolen from https://docs.amplify.aws/lib/storage/download/q/platform/react-native/#file-download-option
  function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || 'download';
    const clickHandler = () => {
      setTimeout(() => {
        URL.revokeObjectURL(url);
        a.removeEventListener('click', clickHandler);
      }, 150);
    };
    a.addEventListener('click', clickHandler, false);
    a.click();
    return a;
  };

  async function downloadFileFromS3(resources, fileResourcesKey) {
    const fileKey = resources["PERSONAL"][fileResourcesKey]["FILE_URI"];
    const result = await Storage.get(fileKey, {download: true});
    downloadBlob(result.Body, resources["PERSONAL"][fileResourcesKey]["FILE_NAME"])
  }

export default downloadFileFromS3;