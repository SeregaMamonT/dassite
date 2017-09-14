package by.mamont.rest;

import by.mamont.entity.Track;
import by.mamont.technical.Database;
import org.hibernate.Session;
import org.hibernate.Transaction;

import javax.servlet.ServletContext;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.Collections;
import java.util.List;


@Path("tracks")
public class TrackResource
{
  @Context ServletContext context;

  private static List<Track> tracks;

  @GET
  @Path("all")
  @Produces(MediaType.APPLICATION_JSON)
  public List<Track> getTracks()
  {
    if (tracks == null) {
      readTracks();
    }
    return tracks;
  }


  private void readTracks()
  {
    try (Session session = Database.getSession()) {
      Transaction transaction = session.beginTransaction();
      tracks = session.createQuery("FROM track", Track.class).list();
      transaction.commit();
    }
    catch (Exception ex) {
      tracks = Collections.emptyList();
    }
  }


  @GET
  @Path("info/{id}")
  @Produces(MediaType.APPLICATION_JSON)
  public Track getTrack(@PathParam("id") int id)
  {
    return tracks.get(id);
  }


  @GET
  @Path("/load/{id}")
  @Produces(MediaType.APPLICATION_JSON)
  public String loadTrack(@PathParam("id") String id)
  {
    return getTrackAddress(id);
  }


  private String getTrackAddress(String id)
  {
    String fileName = resolveTrackName(id);
    return getStoragePath(fileName);
  }


  private String getEncodedTrack(String id)
  {
    String fileName = resolveTrackName(id);

    byte[] bytes = readTrack(fileName);
    byte[] base64 = Base64.getEncoder().encode(bytes);
    return "data:audio/mp3;base64," + new String(base64);
  }


  private byte[] readTrack(String fileName)
  {
    try {
      String fullName = getTrackFullPath(fileName);
      return Files.readAllBytes(Paths.get(fullName));
    }
    catch (IOException e) {
      throw new RuntimeException(e);
    }
  }


  private String getTrackFullPath(String fileName)
  {
    return context.getRealPath(getStoragePath(fileName));
  }


  private String getStoragePath(String fileName)
  {
    return "storage/tracks/" + fileName;
  }


  private String resolveTrackName(String id)
  {
    return "track" + id + ".mp3";
  }
}
