import DataAccess from "./dataAccess";

class HelloWorldController {
  async getHello(res) {
    try {
      let result = await DataAccess.execQuery(
        `SELECT 'Hello world!' helloWorld;`
      );

      res.send({
        success: true,
        data: result
      });
    } catch (error) {
      res.status(500).send({ success: false, error, message: "Ocurrió algo!" });
    }
  }

  async getHello(res) {
    try {
      let result = await DataAccess.execQuery(
        `SELECT 'Hello world!' helloWorld;`
      );

      res.send({
        success: true,
        data: result
      });
    } catch (error) {
      res.status(500).send({ success: false, error, message: "Ocurrió algo!" });
    }
  }
}
export default new HelloWorldController();
