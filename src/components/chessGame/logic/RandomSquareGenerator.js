const randomSquareGenerator = () => {
    const rowNumber = Math.floor(Math.random() * 8 + 1);
    const squareNumber = Math.floor(Math.random() * 8 + 1);
    switch (rowNumber) {
      case 1:
        return "A" + squareNumber;
      case 2:
        return "B" + squareNumber;
      case 3:
        return "C" + squareNumber;
      case 4:
        return "D" + squareNumber;
      case 5:
        return "E" + squareNumber;
      case 6:
        return "F" + squareNumber;
      case 7:
        return "G" + squareNumber;
      case 8:
        return "H" + squareNumber;
      default:
        return "try again";
    }
  };
  
  export default randomSquareGenerator;