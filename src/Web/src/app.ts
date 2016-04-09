export class App {
    message: string = 'Page Number: ';
    pageNumber: number = 1;
    public changePage(value: number) {
      this.pageNumber += value;
      console.log("got here");
}
}
