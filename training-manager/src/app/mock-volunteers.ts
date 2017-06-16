import { Volunteer } from './volunteer.model';

export const VOLUNTEERS: Volunteer[] = [
 new Volunteer(
   "Fransico Montoya", 25, "male", "former sword fighter, practiced to avenge fathers death at the hands of great evil", "Now that my fathers been avenged, I'd like to give back to my community by volunteering to help people defend themselves", true),
 new Volunteer(
   "Nancy Drew", 21, "female", "ametuer slueth", "I used to solve crimes in my community and have been in many tight situations, I would like to help train others to be able to think quickly and defend themselves in a similar situation(the ones I used to get into)", false),
 new Volunteer(
   "Mary Poppins", 35, "female", "nanny and teacher", "I help children become well rounded individuals, I'd like to help people build confidence and feel brave in any situation.", true),
 new Volunteer(
   "Angelina Jolie", 45, "female", "celebrity and actress", "I've played a lot of badasses and assasins, I feel I know enough to help others be a badass.", false)
];
