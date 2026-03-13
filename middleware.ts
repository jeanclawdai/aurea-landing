import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PASSWORD = 'wtc';
const COOKIE_NAME = 'staging-auth';

export function middleware(request: NextRequest) {
  // Check if already authenticated
  const authCookie = request.cookies.get(COOKIE_NAME);
  if (authCookie?.value === 'authenticated') {
    return NextResponse.next();
  }

  // Check for password in URL params (for easy sharing: ?p=wtc)
  const url = new URL(request.url);
  const passwordParam = url.searchParams.get('p');
  
  if (passwordParam === PASSWORD) {
    const response = NextResponse.redirect(new URL('/', request.url));
    response.cookies.set(COOKIE_NAME, 'authenticated', {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    return response;
  }

  // Show password form
  return new NextResponse(
    `<!DOCTYPE html>
    <html>
      <head>
        <title>Aurea - Staging</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { 
            font-family: system-ui, -apple-system, sans-serif;
            background: linear-gradient(135deg, #fafafa, #f0f4ff, #faf0ff);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .container {
            background: white;
            padding: 3rem;
            border-radius: 24px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.1);
            text-align: center;
            max-width: 400px;
            width: 90%;
          }
          h1 { font-size: 2rem; margin-bottom: 0.5rem; color: #111; }
          p { color: #666; margin-bottom: 2rem; }
          input {
            width: 100%;
            padding: 1rem;
            border: 2px solid #e5e7eb;
            border-radius: 12px;
            font-size: 1rem;
            margin-bottom: 1rem;
            text-align: center;
            letter-spacing: 0.2em;
          }
          input:focus { outline: none; border-color: #8b5cf6; }
          button {
            width: 100%;
            padding: 1rem;
            background: #111;
            color: white;
            border: none;
            border-radius: 12px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
          }
          button:hover { background: #333; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Aurea</h1>
          <p>Enter password to view staging</p>
          <form method="GET">
            <input type="password" name="p" placeholder="Password" autofocus />
            <button type="submit">Enter</button>
          </form>
        </div>
      </body>
    </html>`,
    {
      status: 200,
      headers: { 'Content-Type': 'text/html' },
    }
  );
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images).*)'],
};
