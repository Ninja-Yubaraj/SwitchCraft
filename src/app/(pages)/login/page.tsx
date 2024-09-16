'use client';

import { useState, FormEvent } from 'react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/components/ui/card';

interface LoginFormData {
     username: string;
     password: string;
}

export default function LoginPage() {
     const [formData, setFormData] = useState<LoginFormData>({
          username: '',
          password: '',
     });
     const [error, setError] = useState<string | null>(null);

     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const { name, value } = e.target;
          setFormData((prev) => ({ ...prev, [name]: value }));
     };

     const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setError(null);

          if (!formData.username || !formData.password) {
               setError('Please fill in all fields');
               return;
          }

          // Here you would typically send the login data to your server
          console.log('Login data:', formData);
          // For demonstration purposes, we'll just log the data
          alert('Login attempt with username: ' + formData.username);
     };

     return (
          <div className="flex w-full items-center justify-center min-h-screen bg-secondary text-secondary-foreground">
               <Card className="w-full max-w-md bg-card">
                    <CardHeader>
                         <CardTitle className="text-2xl font-bold">Login</CardTitle>
                         <CardDescription>Enter your username and password to access your account.</CardDescription>
                    </CardHeader>
                    <form onSubmit={handleSubmit}>
                         <CardContent className="space-y-4">
                              <div className="space-y-2">
                                   <Label htmlFor="username">Username</Label>
                                   <Input
                                        id="username"
                                        name="username"
                                        type="text"
                                        placeholder="Enter your username"
                                        value={formData.username}
                                        onChange={handleInputChange}
                                        required
                                   />
                              </div>
                              <div className="space-y-2">
                                   <Label htmlFor="password">Password</Label>
                                   <Input
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        required
                                   />
                              </div>
                              {error && <p className="text-red-500 text-sm">{error}</p>}
                         </CardContent>
                         <CardFooter>
                              <Button type="submit" className="w-full">
                                   Log in
                              </Button>
                         </CardFooter>
                    </form>
               </Card>
          </div>
     );
}
