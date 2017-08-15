package by.mamont.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;


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
}
