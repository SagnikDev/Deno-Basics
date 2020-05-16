import { Application, Router } from "https://deno.land/x/oak/mod.ts";

//File: Model

interface Course {
  name: string;
  price: number;
  certification: boolean;
}

//File:Data

let courses: Array<Course> = [
  {
    name: "Java",
    price: 200,
    certification: true,
  },
  {
    name: "Python",
    price: 700,
    certification: true,
  },
  {
    name: "JavaScript",
    price: 0,
    certification: false,
  },
];

//File:Controllers

export const getCources = ({ response }: { response: any }) => {
  response.body = courses;
};

export const addCources = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  const body = await request.body();
  const course: Course = body.value;

  courses.push(course);
  response.body = { coursesAdded: "SUCCESS" };
  response.status = 200;
};

//File:server file

const router = new Router();
const app = new Application();
const port = 8300;

router
    .get("/learn",getCources)
    .post("/create",addCources)


app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({port})