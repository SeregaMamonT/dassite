package by.mamont.rest;

import by.mamont.entity.Track;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.LinkedList;
import java.util.List;


@Path("tracks")
public class TrackResource
{
  private List<Track> tracks = new LinkedList<>();


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
  @Path("{id}")
  @Produces(MediaType.APPLICATION_JSON)
  public Track getTrack(@PathParam("id") String id)
  {
    int index = Integer.parseInt(id);
    return tracks.get(index);
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
