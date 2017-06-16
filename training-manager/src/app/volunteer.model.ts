export class Volunteer {
  trained: boolean = null;
  constructor (
    public name: string,
    public age: number,
    public sex: string,
    public activities: string,
    public hobbies: string,
    public background: string,
    public bio: string,
    public id: number) { }
}
