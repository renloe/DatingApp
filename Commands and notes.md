# dotnet commands

- dotnet --info\
  _Gets installed .net runtimes_

- dotnet tool list -g\
  _Lists dotnet tools_

- dotnet build\
  _Builds project_
  <br><br>

---

# Create DatingApp Solution file

BobbyLearning\angular\DatingApp> `dotnet new sln`\
_Creates a solution file with the current folder name - DatingApp_
<br><br>

---

# Create DatingApp API Project

BobbyLearning\angular\DatingApp> `dotnet new webapi -n API`\
_Creates a project named API_
<br><br>

---

# Add API Project Project to Solution

BobbyLearning\angular\DatingApp> `dotnet sln add .\API\`\
Project API\API.csproj added to the solution.
<br><br>

---

# List Projects in Solution

BobbyLearning\angular\DatingApp> `dotnet sln list`\
Project(s)
API\API.csproj
<br><br>

---

# VS Code Extensions

### C# Dev Kit

- This also installs C#, C# Dev Kit, and IntelliCode for C# Dev Kit
- May need to right click on extension and set to Pre-Release Version if there are issues with the extension.

### Material Icon Theme

- Material icons for VS Code. It adds nice looking icons for files and folders of various types.

### NuGet Gallery

- NuGet Gallery Extension makes installing and uninstalling NuGet packages easier.

### Sqlite

- Explore and query SQLite databases
- To open: ctrl-shift-p: SQLite: Open Database
  ** Select Database
  ** Browse with "SQLITE EXPLORER" in the files panel

### Angular Language Service

- Editor services for Angular templates

### AngularTools - Allan Simonsen

- AngularTools is a Visual Studio Code extension with a collection of tools for exploring an Angular project, help you with documenting, reverse engineering a project or help when refactoring.

<br><br>

---

# VS Code Settings

- Settings: File >> Preferences >> Settings
- Bracket Pair Colorization: Enabled
- Guides: Bracket Pairs: True
- Auto Closing Brackets: Always
- Auto Closing Quotes: Always
  <br><br>

---

# NuGet Packages

### Microsoft.EntityFrameworkCore by Microsoft

- Install in API.csproj - Version must match dotnet version - 7 in this example.

### Microsoft.EntityFrameworkCore.Design by Microsoft

- Install in API.csproj - Version must match dotnet version - 7 in this example.

### Microsoft.EntityFrameworkCore.Sqlite

- Install in API.csproj - Version must match dotnet version - 7 in this example.

### System.IdentityModel.Tokens.Jwt by Microsoft

- Includes types that provide support for creating, serializing and validating JSON Web Tokens.

### Microsoft.AspNetCore.Authentication.JwtBearer by Microsoft

- ASP.NET Core middleware that enables an application to receive an OpenID Connect bearer token.

### AutoMapper.Extensions.Microsoft.DependencyInjection

- AutoMapper extension for ASP.NET Core.
  <br><br>

---

# VS Code Commands - Shortcuts

- Preview Markdown: `ctrl-shift-v`
- Reload: `ctrl-shift-p` Developer: Reload Window
- Search Files: `ctrl-p` Search files by name
- Format: `alt-shift-f`
- Keyboard Shorcuts List: `ctrl-k,s`
  <br><br>

---

# Starting the API Project

- Standard Run\
  BobbyLearning\angular\DatingApp\API> `dotnet run`

- To start with hot reloading\
  BobbyLearning\angular\DatingApp\API> `dotnet watch`

- To start with NO hot reloading\
  BobbyLearning\angular\DatingApp\API> `dotnet watch --no-hot-reload`

  <br><br>

---

# Cleanup launchsettings.json file

_File should only contain the following code_

```json
{
  "$schema": "https://json.schemastore.org/launchsettings.json",
  "profiles": {
    "http": {
      "commandName": "Project",
      "dotnetRunMessages": true,
      "launchBrowser": false,
      "applicationUrl": "http://localhost:5000;https://localhost:5001",
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      }
    }
  }
}
```

<br><br>

---

# Trust and Clean Certificates for https

- BobbyLearning\angular\DatingApp> `dotnet dev-certs https --trust`
- BobbyLearning\angular\DatingApp> `dotnet dev-certs https --clean`
  <br><br>

---

# appsettings.Development.json - Set Default Log Level to "Information"

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Information"
    }
  }
}
```

<br><br>

---

# Program.cs - Remove Swagger for this project

_Final File Contents_

```code
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

var app = builder.Build();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
```

<br><br>

---

# API.csproj - Remove Swagger and disable Nullable

_Final File Contents:_

```code
<Project Sdk="Microsoft.NET.Sdk.Web">

  <PropertyGroup>
    <TargetFramework>net7.0</TargetFramework>
    <Nullable>disable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
  </PropertyGroup>

</Project>
```

<br><br>

---

# NuGet config file creation

BobbyLearning\angular\DatingApp> `dotnet new nugetconfig`
<br><br>

---

# Install dotnet-ef

https://www.nuget.org/packages/dotnet-ef/

Install dotnet-ef: `dotnet tool install --global dotnet-ef --version 7.0.13`\
_Install in API.csproj - Version must match dotnet version - 7 in this example_

Update dotnet-ef: `dotnet tool update --global dotnet-ef --version 7.0.13`
<br><br>

---

# Create Initial EF Migration

BobbyLearning\angular\DatingApp\API> `dotnet ef migrations add InitialCreate -o Data/Migrations`\
BobbyLearning\angular\DatingApp\API> `dotnet ef migrations add UserPasswordAdded`

_No need to specify output directory if a migration already exists_
<br><br>

---

# Create or Update Database

BobbyLearning\angular\DatingApp\API> `dotnet ef database update`
<br><br>

---

# Remove Latest Migration

BobbyLearning\angular\DatingApp\API> `dotnet ef migrations remove`
<br><br>

---

# .editorconfig file

_Create at root of application_

```code
[*.{cs,vb}]
dotnet_naming_rule.private_members_with_underscore.symbols  = private_fields
dotnet_naming_rule.private_members_with_underscore.style    = prefix_underscore
dotnet_naming_rule.private_members_with_underscore.severity = suggestion

dotnet_naming_symbols.private_fields.applicable_kinds           = field
dotnet_naming_symbols.private_fields.applicable_accessibilities = private

dotnet_naming_style.prefix_underscore.capitalization = camel_case
dotnet_naming_style.prefix_underscore.required_prefix = _
```

<br><br>

---

# git commands

- Initialize Repository: BobbyLearning\angular\DatingApp> `git init`
- Create dotnet gitignore file: BobbyLearning\angular\DatingApp> `dotnet new gitignore`
- Add appsettings.json to gitignore: Under source control, right-click file and select "`add to gitignore`"
- Generate global.json file: BobbyLearning\angular\DatingApp> `dotnet new globaljson`\
  _This records the current runtime version_

- Add files to repository: BobbyLearning\angular\DatingApp> `git add .`
- Commit Files to repository: BobbyLearning\angular\DatingApp> `git commit -m "End of section2"`
- Rename master to main: BobbyLearning\angular\DatingApp> `git branch -M main`
- Add remote origin: BobbyLearning\angular\DatingApp> `git remote add origin https://github.com/renloe/DatingApp.git`
- Push to Github: BobbyLearning\angular\DatingApp> `git push -u origin main`
  <br><br>

---

# ng commands

- Create client project: BobbyLearning\angular\DatingApp> `ng new client`
- Start Dev Server: BobbyLearning\angular\DatingApp\client> `ng serve`\
  _Default Address: http://localhost:4200/_
  <br><br>

---

# Adding Bootstrap and Font-awesome

### Bootstrap:

https://valor-software.com/ngx-bootstrap/#/\
BobbyLearning\angular\DatingApp\client> `ng add ngx-bootstrap`\
_Need to restart client after bootstrap install_

### Font-Awesome:

BobbyLearning\angular\DatingApp\client> `npm install font-awesome`

- Angular.json Section >> projects >> client >> architect >> >> build >> options >> styles\
  _Add the following: "`./node_modules/font-awesome/css/font-awesome.min.css`",_

```json
            "assets": ["src/favicon.ico", "src/assets"],
            "styles": [
              "./node_modules/ngx-bootstrap/datepicker/bs-datepicker.css",
              "./node_modules/bootstrap/dist/css/bootstrap.min.css",
              "./node_modules/font-awesome/css/font-awesome.min.css",
              "src/styles.css"
            ],
            "scripts": []
```

<br><br>

---

# Adding https to angular client using mkcert

https://github.com/FiloSottile/mkcert

- Open command prompt as Administrator: C:\Windows\System32> `choco install mkcert`
- Create ssl directory: BobbyLearning\angular\DatingApp\client> `mkdir ssl`
- Install CA Cert: BobbyLearning\angular\DatingApp\client\ssl> `mkcert -install`
- Localhost Cert: BobbyLearning\angular\DatingApp\client\ssl> `mkcert localhost`

### Angular.json >> serve section

- Add the following:

```json
        "serve": {
          "options": {
            "ssl": true,
            "sslCert": "./ssl/localhost.pem",
            "sslKey": "./ssl/localhost-key.pem"
          },
          "builder": "@angular-devkit/build-angular:dev-server",
          "configurations": {
            "production": {
              "browserTarget": "client:build:production"
            },
            "development": {
              "browserTarget": "client:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
```

- Restart Client
- https://localhost:4200
- API Program.cs - Add app.UseCors code

```code
var app = builder.Build();

app.UseCors(builder => builder
  .AllowAnyHeader()
  .AllowAnyMethod()
  .WithOrigins("https://localhost:4200"));

app.MapControllers();
```

- Restart API
  <br><br>

---

# VS Code Debugger

ctrl-shift-p: .NET: Generate Assets for Build and Debug\
_This generates the .vscode folder with launch.json files_

- Start API: BobbyLearning\angular\DatingApp\API> `dotnet watch --no-hot-reload`
- Open Debugger
- .NET Core Attach
- Click Play Button
- Type API and Select API with Process ID
  <br><br>

---

# JWT Decoders

http://jwt.ms

Example Token:\
`eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2FtIiwibmJmIjoxNzAwMDk4MzE4LCJleHAiOjE3MDA3MDMxMTgsImlhdCI6MTcwMDA5ODMxOH0.zxq1mR0M8Qtf7goYe4sQHyNX7qSZIgk_P0vCawhz5GGrYhcWQHjbzThOsLJ4SAhRJJqNh0ZhVT__SBuMf-3dCg`

Output:

```json
{
  "alg": "HS512",
  "typ": "JWT"
}.{
  "name": "sam",
  "nbf": 1700098318,
  "exp": 1700703118,
  "iat": 1700098318
}.[Signature]
```

http://jwt.io

> JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.
> JWT.IO allows you to decode, verify and generate JWT.

<br><br>

---

# Toast Service

https://github.com/scttcper/ngx-toastr

- Install ngx-toastr: BobbyLearning\angular\DatingApp\client> `npm install ngx-toastr@17.0.2`

- Add ngx-toastr css refernece to the angular.json styles section
- Update angular.json styles section: `"./node_modules/ngx-toastr/toastr.css"`
- _Client restart is necessary after updating angular.json_

```json
 "styles": [
              "./node_modules/ngx-bootstrap/datepicker/bs-datepicker.css",
              "./node_modules/bootstrap/dist/css/bootstrap.min.css",
              "./node_modules/font-awesome/css/font-awesome.min.css",
              "./node_modules/ngx-toastr/toastr.css",
              "src/styles.css"
            ],
            "scripts": []
```

- Add ToastrModule to app.module.ts imports

```javascript
imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
],
```

- Usage:

```javascript
constructor(private accountService: AccountService, private toastr: ToastrService) {}
  ngOnInit(): void {}

  register() {
    this.accountService.register(this.model).subscribe({
      next: (response) => {
        this.cancel();
      },
      error: (error) => this.toastr.error(error.error,),
    });
  }
```

## <br><br>

# Bootswatch

https://bootswatch.com/

- Install Bootswatch: BobbyLearning\angular\DatingApp\client> `npm install bootswatch`
- Update angular.json styles section: `"./node_modules/bootswatch/dist/united/bootstrap.css"'`
- _Client restart is necessary after updating angular.json_

```json
 "styles": [
              "./node_modules/ngx-bootstrap/datepicker/bs-datepicker.css",
              "./node_modules/bootstrap/dist/css/bootstrap.min.css",
              "./node_modules/bootswatch/dist/united/bootstrap.css",
              "./node_modules/font-awesome/css/font-awesome.min.css",
              "./node_modules/ngx-toastr/toastr.css",
              "src/styles.css"
            ],
            "scripts": []
```

## <br><br>

# JSON Generator

https://json-generator.com/

<br><br>
