"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import {
  Button,
  buttonVariants,
} from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type FormData = z.infer<typeof schema>;

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    toast({ title: "Signed in", description: `Welcome back, ${data.email}` });
    router.push("/dashboard");
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-muted/50 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Welcome back</CardTitle>
          <CardDescription>
            Sign in to your Ogao account to continue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label>Email address</Label>
              <Input
                {...register("email")}
                type="email"
                placeholder="you@company.com"
                className={cn(
                  errors.email ? "border-destructive" : "",
                  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                )}
              />
              {errors.email && (
                <p className="text-xs text-destructive">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label>Password</Label>
              <Input
                {...register("password")}
                type="password"
                placeholder="••••••••"
                className={cn(
                  errors.password ? "border-destructive" : "",
                  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                )}
              />
              {errors.password && (
                <p className="text-xs text-destructive">{errors.password.message}</p>
              )}
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm text-muted-foreground">
                <input type="checkbox" className="sr-only peer" />
                <span className="relative flex items-center rounded-md cursor-pointer select-none">
                  <span className="pointer-events-none shrink-0 rounded-sm border border-border bg-background peer-checked:bg-primary peer-checked:text-primary-foreground h-5 w-5" />
                  <span className="ml-2 text-sm">Remember me</span>
                </span>
              </label>
              <a href="#" className="text-sm text-primary hover:underline">
                Forgot password?
              </a>
            </div>
            <Button
              type="submit"
              className="w-full"
            >
              Sign in <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button variant="outline" asChild>
            <Link href="/register">Create an account</Link>
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            By continuing, you agree to our Terms and Privacy Policy.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
