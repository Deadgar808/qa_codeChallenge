import { EmployeeHandler } from "./pageObjects/EmployeeHandler";

const em = new EmployeeHandler();

describe("Employee Manager", () => {
  beforeEach(async () => {
    await em.navigate();
  });
  afterAll(async () => {
    await em.quit();
  });
  test("can add a new employee", async () => {
    await em.addEmployee();
    await em.selectEmployeeByName("New Employee");
    await em.editEmployee({
      name: "Bill Murray",
      phone: "1234567890",
      title: "Actor",
    });
    await em.saveChanges();
    await em.selectEmployeeByName("Bill Murray");
    let employee = await em.getEmployeeInfo();
    expect(employee.name).toEqual("Bill Murray");
    expect(employee.phone).toEqual("1234567890");
    expect(employee.title).toEqual("Actor");
  });
  test("can edit an existing employee", async () => {
    await em.selectEmployeeByName("Bernice Ortiz");
    await em.editEmployee({
      title: "Royal Asshat",
    });
    await em.saveChanges();
    await em.selectEmployeeByName("Bernice Ortiz");
    let employee = await em.getEmployeeInfo();
    expect(employee.title).toEqual("Royal Asshat");
  });
  test("can edit an existing employee", async () => {
    await em.selectEmployeeByName("Lou White");
    await em.editEmployee({
      name: "Louis White",
      phone: "8727813498",
      title: "Full-Stack Dev",
    });
    await em.saveChanges();
    let employee = await em.getEmployeeInfo();
    expect(employee.name).toEqual("Louis White");
    expect(employee.phone).toEqual("8727813498");
    expect(employee.title).toEqual("Full-Stack Dev");
    expect(employee).toEqual({
      id: 8,
      name: "Louis White",
      phone: "8727813498",
      title: "Full-Stack Dev",
    });
  });
});
