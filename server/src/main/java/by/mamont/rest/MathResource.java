package by.mamont.rest;

import by.mamont.entity.MathFunction;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.math.BigInteger;


@Path("math")
public class MathResource
{
  @GET
  @Path("square/{number}")
  @Produces(MediaType.TEXT_PLAIN)
  public String square(@PathParam("number") int number)
  {
    int result = number * number;
    return String.valueOf(result);
  }


  @GET
  @Path("power/{base}/{exponent}")
  @Produces(MediaType.TEXT_PLAIN)
  public String power(@PathParam("base") int base, @PathParam("exponent") int exponent)
  {
    BigInteger result = BigInteger.valueOf(base).pow(exponent);
    return result.toString();
  }


  @POST
  @Path("postAction")
  @Produces(MediaType.APPLICATION_JSON)
  @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
  public MathFunction postForm(
      @FormParam("functionCode") String functionCode,
      @FormParam("number") int number,
      @FormParam("base") int base,
      @FormParam("exponent") int exponent)
  {
    String result = "42";
    switch (functionCode) {
      case "square":
        result = square(number);
        break;
      case "power":
        result = power(base, exponent);
        break;
    }

    MathFunction function = new MathFunction();
    function.setNumber(number);
    function.setBase(base);
    function.setExponent(exponent);
    function.setResult(result);

    return function;
  }
}
