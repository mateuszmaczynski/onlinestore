export const validateCreditCartDate = (value: string) => {
    if (value.length !== 5){
      return 'Wprowadzono złą długość danych, wprowadź dane w formacie MM/YY';
    }
    const [month, year] = value.split('/');
    if (Number(month) > 12) {
      return 'Błędna wartość miesiąca';
    }
    const date = new Date ();
    const currentYear = date.getFullYear().toString().slice(2,4);
    if(Number(year) < Number(currentYear)){
      return "Błędna wartość roku, podany rok nie może być mniejszy niż obecny";
    }
    return true;
}