package by.mamont.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.math.BigInteger;


@Path("math")
public class MathResource
{
  @GET
  @Path("square/{number}")
  @Produces(MediaType.TEXT_PLAIN)
  public int square(@PathParam("number") int number)
  {
    return number * number;
  }


  @GET
  @Path("power/{base}/{exponent}")
  @Produces(MediaType.TEXT_PLAIN)
  public String square(@PathParam("base") int base, @PathParam("exponent") int exponent)
  {
    BigInteger result = BigInteger.valueOf(base).pow(exponent);
    return result.toString();
  }
}
