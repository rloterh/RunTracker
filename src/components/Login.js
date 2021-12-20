import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUser } from '../actions/index';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    const userInfo = {
      username,
      password,
    };

    if (username === '' || password === '') return toast.error('username or password blank');
    return dispatch(getUser(userInfo));
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-300">
      <div className="logo">
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          viewBox="0 0 1055.000000 1280.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
            fill="#01bfff"
            stroke="none"
          >
            <path d="M3139 12757 c-85 -37 -103 -50 -165 -117 -43 -45 -94 -116 -130 -179 -32 -57 -70 -110 -84 -119 -67 -42 -70 -49 -70 -144 0 -86 -1 -89 -35 -127 -19 -21 -46 -63 -59 -92 -21 -50 -23 -64 -19 -184 6 -170 -15 -308 -56 -368 -49 -72 -61 -104 -61 -161 0 -61 7 -69 77 -84 36 -8 38 -10 35 -45 -2 -31 4 -46 33 -81 29 -35 35 -51 35 -88 0 -37 4 -49 24 -62 21 -13 24 -21 19 -50 -9 -54 21 -126 65 -158 37 -26 40 -26 122 -17 79 9 90 13 167 64 46 30 86 55 91 55 4 0 16 -15 27 -32 10 -18 67 -99 127 -179 l108 -147 0 -61 c0 -50 -3 -63 -17 -68 -24 -9 -181 -114 -263 -175 -35 -27 -103 -96 -150 -152 l-86 -104 -39 -135 -38 -134 -91 -77 c-201 -168 -237 -210 -383 -458 -74 -126 -138 -228 -143 -228 -38 0 -167 171 -289 383 -66 115 -106 201 -151 323 -70 187 -69 184 -20 339 68 212 67 209 62 376 l-5 155 -32 21 c-27 18 -33 29 -38 70 -4 26 -11 65 -17 86 -11 36 -13 37 -55 37 -43 0 -44 -1 -50 -37 -13 -78 -17 -93 -25 -93 -4 0 -10 23 -12 50 -3 28 -8 53 -11 56 -3 4 -26 9 -50 11 -41 5 -47 3 -67 -25 -21 -29 -25 -30 -44 -17 -48 34 -93 7 -139 -81 -9 -17 -30 -37 -47 -44 -37 -15 -70 -59 -70 -92 0 -21 -4 -23 -40 -20 -49 5 -54 -6 -64 -125 -6 -75 -4 -87 18 -130 13 -27 35 -84 49 -129 17 -56 40 -102 75 -151 45 -62 60 -96 126 -294 112 -339 288 -786 358 -914 91 -165 259 -414 316 -469 l50 -49 69 8 c85 9 202 55 258 101 24 19 74 75 112 125 43 56 101 117 158 163 50 40 124 114 165 164 41 50 77 91 80 92 3 0 66 -62 141 -137 l136 -138
           -9 -166 -9 -167 57 -148 c31 -82 80 -207 110 -278 l55 -129 -31 -214 c-17 -118 -30 -218 -28 -222 2 -5 31 -31 65 -59 51 -43 70 -68 115 -154 29 -57 64 -139 77 -182 13 -44 34 -103 46 -131 l23 -51 -110 -185 c-128 -214 -124 -206 -103 -211 12 -2 -34 -79 -190 -315 -196 -296 -211 -322 -306 -535 -56 -122 -155 -356 -221 -518 -139 -341 -233 -534 -314 -646 -31 -43 -71 -108 -87 -144 l-31 -65 2 -178 c2 -177 1 -178 -25 -220 -23 -36 -27 -57 -33 -147 -7 -120 -30 -195 -140 -455 -88 -209 -181 -493 -224 -680 -27 -119 -50 -190 -116 -345 -68 -160 -252 -530 -265 -530 -2 0 -23 9 -48 19 l-45 19 -56 -50 -57 -50 -85 56 -85 57 -72 -7 c-64 -5 -88 -15 -224 -85 l-151 -79 -86 0 -86 0 -113 75 c-106 71 -115 75 -167 75 -53 0 -58 -2 -99 -44 l-44 -45 -9 -101 -9 -101 42 -112 c34 -90 62 -140 146 -262 l104 -152 132 -95 c114 -82 146 -100 237 -131 74 -25 130 -37 190 -41 l85 -6 40 -44 c66 -72 294 -195 455 -246 129 -41 137 -42 208 -34 l75 9 42 75 c30 52 44 92 49 133 12 91 69 246 119 323 37 56 49 85 61 153 21 110 22 106 -22 132 -20 12 -38 23 -39 24 -2 1 12 46 31 101 51 151 154 348 253 482 48 64 145 200 217 302 71 102 155 219 186 260 183 242 215 294 268 425 96 240 107 302 132 755 9 157 23 277 45 377 3 12 64 76 136 142 92 84 152 149 202 218 99 138 215 262 337 361 133 107 241 234 450 527 90 127 165 232 167 235 9 10 46 -46 82 -120 51 -108 186 -295 320 -444 482 -537 1044 -1124 1113 -1162 58 -33 208 -4 351 68 78 39 157 65 390
            129 337 93 482 124 622 133 114 8 196 27 415 96 85 27 253 70 373 95 217 45 220 45 415 45 206 -1 730 -24 739 -33 3 -3 42 -63 88 -134 l83 -128 138 -6 c78 -3 209 -18 299 -33 176 -30 187 -35 292 -131 47 -43 62 -64 81 -118 22 -63 25 -65 80 -91 43 -19 83 -27 153 -32 l95 -7 37 84 c33 76 37 92 37 169 0 47 -5 123 -11 170 -11 77 -19 98 -91 230 -62 116 -102 173 -196 285 -111 133 -120 141 -175 160 -52 18 -62 26 -93 75 -19 30 -34 59 -34 65 0 5 -14 60 -32 120 l-32 110 -150 159 c-83 88 -200 201 -260 253 -104 88 -112 93 -156 93 -47 0 -47 0 -98 -73 -34 -47 -98 -113 -188 -192 -80 -70 -169 -160 -216 -217 -43 -54 -80 -98 -81 -98 -1 0 -101 14 -222 30 -187 25 -252 30 -435 30 -118 0 -289 7 -380 15 -193 17 -581 20 -664 4 -40 -7 -119 -42 -251 -110 -106 -55 -247 -121 -313 -148 l-120 -49 -67 40 c-59 35 -79 57 -181 193 -109 144 -116 158 -139 241 -13 49 -44 146 -68 215 -25 70 -55 162 -67 205 -34 125 -113 247 -250 389 -145 150 -210 249 -235 361 -23 101 -21 132 18 284 26 103 32 144 32 235 0 101 -3 120 -39 230 -49 146 -178 404 -346 690 -68 116 -151 274 -185 351 -61 139 -62 145 -74 277 -12 130 -8 212 10 202 4 -3 5 -28 2 -55 -5 -39 -2 -54 11 -69 11 -12 15 -27 11 -43 -15 -58 23 -92 102 -92 28 0 32 -4 38 -33 10 -57 41 -68 175 -65 101 2 124 6 192 33 77 31 112 61 240 207 23 25 47 42 60 42 13 1 53 27 93 61 39 34 160 136 270 229 126 105 287 254 435 404 132 133 257 250 286 268 45 27 55 39 79 97 35 86 73 145 129 201
             45 43 46 46 45 105 -1 108 -14 134 -114 228 -106 99 -197 149 -350 192 -55 15 -136 47 -180 71 -44 24 -132 65 -195 92 -64 27 -143 67 -175 89 -60 40 -114 57 -347 108 -70 15 -86 23 -175 92 -54 41 -116 84 -138 95 -22 11 -92 48 -155 83 -103 56 -124 64 -201 73 -74 9 -96 8 -159 -8 -41 -11 -75 -18 -77 -17 -1 2 9 40 22 85 32 112 46 444 22 535 -8 31 -13 57 -11 57 3 0 19 -17 37 -37 18 -21 73 -81 122 -134 60 -65 106 -125 138 -183 46 -84 47 -89 47 -172 0 -73 2 -85 16 -82 9 2 25 26 36 53 17 41 19 67 16 145 l-5 96 -63 94 c-35 52 -107 149 -161 215 -132 162 -221 303 -291 464 -54 125 -63 139 -148 231 -80 87 -90 102 -90 136 0 21 -10 89 -22 152 -26 130 -14 116 -165 198 l-72 39 -91 -48 c-125 -65 -169 -65 -271 -2 -78 48 -77 50 33 36 54 -7 68 -2 68 24 0 10 -244 153 -340 199 -96 45 -127 55 -185 60 -66 4 -76 2 -166 -37z m446 -235 c-27 -2 -96 -1 -153 3 -96 7 -102 8 -88 24 14 16 24 15 153 -4 114 -17 129 -21 88 -23z m1741 -2896 l269 -84 209 -17 c116 -9 213 -18 218 -21 18 -12 3 -53 -93 -250 l-101 -208 -121 -128 c-66 -71 -175 -180 -241 -242 l-121 -114 -75 12 c-60 9 -99 25 -193 75 l-118 63 -70 -13 c-50 -9 -73 -18 -80 -32 -19 -35 -19 -11 -1 44 11 30 29 124 42 209 15 104 30 170 45 200 23 45 23 46 4 72 -15 21 -17 31 -9 50 5 12 23 86 40 163 30 141 92 305 115 305 6 0 133 -38 281 -84z m-411 -1125 c3 -5 -30 -35 -72 -66 -71 -51 -78 -54 -81 -35 -6 35 5 48 65 79 62 32 79 36 88 22z"
            />
          </g>
        </svg>
      </div>
      <div className="mb-10">
        <h1 className="font-sans font-black text-3xl">
          <span className="text-run">Run</span>
          <span className="text-tracker">Tracker</span>
        </h1>
      </div>
      <div className="px-16 w-full">
        <form onSubmit={onSubmit} className="flex flex-col space-y-3 font-sans">
          <input
            className="px-3 py-2 focus:border-blue-300 focus:outline-none"
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="px-3 py-2 focus:border-4 focus:border-blue-300 focus:outline-none"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input className="px-3 py-2 bg-green-300 text-white border-0 focus:outline-none" type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
