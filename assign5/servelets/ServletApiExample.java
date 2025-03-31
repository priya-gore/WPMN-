package servlets;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/api-example")
public class ServletApiExample extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        String clientIP = request.getRemoteAddr();
        String userAgent = request.getHeader("User-Agent");

        out.println("<h2>Client Information</h2>");
        out.println("<p>IP Address: " + clientIP + "</p>");
        out.println("<p>User-Agent: " + userAgent + "</p>");
    }
}

