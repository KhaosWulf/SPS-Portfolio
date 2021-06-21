package com.google.sps.servlets;

import com.google.gson.Gson;
import java.io.IOException;
import java.util.ArrayList;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /music URL. Returns music suggstions from list. */
@WebServlet("/music")
public class MusicSuggestions extends HttpServlet {

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

        ArrayList<String> music = new ArrayList<String>();
        music.add("Dimash - SOS");
        music.add("Dimash - Sinful Passion");
        music.add("Stromae - Carmen");
        music.add("Vybz Kartel and Sikka Rhymes - Dirty John Crow");
        music.add("Yemi Alade - Johnny");
        music.add("BTS - Fake Love");
        music.add("BLACKPINK - Kill This Love");
        music.add("Bratz Rock Angelz - So Good");
        music.add("Patsy Cline - Crazy");
        music.add("Felix Mendelssohn - Symphony No. 4 in A major, Op. 90 Italian - I. Allegro vivace");
        music.add("Mendelssohn Symphony No. 5 Reformation Second Movement");
        music.add("Caleb Hyles - Any Disney Song");
        music.add("The Prince of Egypt - All Songs");

        String json = turnJsonToGson(music);

        response.setContentType("text/html;");
        response.getWriter().println(json);
    }

    private String turnJsonToGson(ArrayList<String> music) {
        Gson gson = new Gson();
        String json = gson.toJson(music);
        return json;
    }
}
