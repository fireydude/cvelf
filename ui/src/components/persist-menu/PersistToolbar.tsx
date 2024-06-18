interface IPersistToolbar {
  setCvJsonData: (cvData: string) => void;
  handleSave: () => void;
}

export const PersistToolbar: React.FC<IPersistToolbar> = (props) => {
  const { setCvJsonData, handleSave } = props;
  function handleReset() {
    const cvData = window.localStorage.getItem('cv');
    if (cvData) {
      setCvJsonData(cvData);
    }
  }
  function handleBackup() {
    const cvData = window.localStorage.getItem('cv');
    if (!cvData) {
      return;
    }

    const link = document.createElement("a");
    const file = new Blob([cvData], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = "backup.json";
    link.click();
    URL.revokeObjectURL(link.href);
  }
  function handleRestore() {
    const fileInput = document.getElementById('restore');
    console.log('start');
    if (fileInput) {
      console.log(fileInput);
      const files = (fileInput as any).files;
      if (files?.length === 1) {
        const reader = new FileReader();
        reader.onload = fileLoadedEvent => {
          const json = fileLoadedEvent?.target?.result as string;
          window.localStorage.setItem('cv', json);
          setCvJsonData(json);
        };
        reader.onerror = error => console.error(error);
        reader.readAsText(files[0]); // you could also read images and other binaries
      }
    }
  }

  const buttonStyle: React.CSSProperties = {
    display: 'block',
    width: 80,
    height: 20,
    marginBottom: 5,
    // padding: 2,
  };

  return (<menu style={{
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(10,10,10, 0.1)',
    padding: 10,    
    paddingTop: 50,
    paddingBottom: 50,
    borderRadius: 5,
    marginLeft: 10,
    marginTop: 100,
  }}>
    <button onClick={handleReset} style={buttonStyle}>Reset</button>
    <button onClick={handleSave} style={buttonStyle}>Save</button>
    <button onClick={handleBackup} style={buttonStyle}>Backup</button>
    <div style={buttonStyle}>
      <label htmlFor="restore" style={{ 
        ...buttonStyle, border: 'solid 1px', borderRadius: 2, background: "#eee", padding: 2, width: 74, fontSize: 13 }}>
          Restore
        </label>
      <input id='restore' style={{ visibility: "hidden" }} type={"file"} onChange={handleRestore} />
    </div>
  </menu>);
};