export class Volunteer {
  public trained: boolean = false;
  constructor (
    public name: string,
    public age: number,
    public sex: string,
    public background: string,
    public bio: string) { }
}
