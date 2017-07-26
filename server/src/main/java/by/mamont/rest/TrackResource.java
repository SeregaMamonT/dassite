package by.mamont.rest;

import by.mamont.entity.Track;

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
import java.util.LinkedList;
import java.util.List;


@Path("tracks")
public class TrackResource
{
  private List<Track> tracks = new LinkedList<>();
  @Context
  ServletContext context;


  public TrackResource()
  {
    tracks.add(createTrack(0, "Oomph!", "Augen auf!"));
    tracks.add(createTrack(1, "Oomph!", "Labyrinth"));
    tracks.add(createTrack(2, "Rammstein", "Du Riechtst So Gut"));
  }


  @GET
  @Path("all")
  @Produces(MediaType.APPLICATION_JSON)
  public List<Track> getTracks()
  {
    return tracks;
  }


  @GET
  @Path("info/{id}")
  @Produces(MediaType.APPLICATION_JSON)
  public Track getTrack(@PathParam("id") String id)
  {
    int index = Integer.parseInt(id);
    return tracks.get(index);
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


  private Track createTrack(int id, String singer, String title)
  {
    Track track = new Track();
    track.setId(id);
    track.setArtist(singer);
    track.setTitle(title);
    return track;
  }
}
